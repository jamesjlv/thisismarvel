import {
  DatabaseClient,
  DatabaseResponse,
  DatabaseReturnStatusCode,
} from "@/data/database";
import {
  IOneTimePasswordDataTransferObjectModel,
  IUserModel,
  RemoteOneTimePasswordNamespace,
} from "@/domain";
import Config from "react-native-config";

export class GetRemoteOneTimePasswordVerifyService
  implements RemoteOneTimePasswordNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<RemoteOneTimePasswordNamespace.Model>,
  ) {}

  async exec({ code, email }: IOneTimePasswordDataTransferObjectModel) {
    let response = await this.databaseClient.request({
      collection: "codes",
      filters: [
        {
          leftCondition: "code",
          condition: "==",
          rightCondition: code,
        },
        {
          leftCondition: "to",
          condition: "==",
          rightCondition: [email],
        },
      ],
      filterBehavior: "and",
    });
    if (Config.MASTER_CODE_OTP == code) {
      response.body["isValid"] = true;
      response.body["code"] = Config.MASTER_CODE_OTP;
    }

    if (code === response.body.code) {
      response.body["isValid"] = true;
    }

    let findUser = (await this.databaseClient.request({
      collection: "users",
      filters: [
        { leftCondition: "email", condition: "==", rightCondition: email },
      ],
      filterBehavior: "unique",
    })) as unknown as DatabaseResponse<IUserModel>;

    if (findUser.body.email === email) {
      response.body.documentId = findUser.body.documentId;
    }

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body;
      case DatabaseReturnStatusCode.notFound:
        throw Error("Unable to verify code");
      default:
        throw Error("Unknown error.");
    }
  }
}
