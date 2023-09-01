import {
  DatabaseClient,
  DatabaseResponse,
  DatabaseReturnStatusCode,
} from "@/data/database";
import { IUserModel, RemotePasswordRecoveryServiveNamespace } from "@/domain";

export class SetRemotePasswordRecoveryService
  implements RemotePasswordRecoveryServiveNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<RemotePasswordRecoveryServiveNamespace.Model>,
  ) {}

  async exec({
    password,
    documentId,
  }: RemotePasswordRecoveryServiveNamespace.Params) {
    let response = await this.databaseClient.update({
      collection: "users",
      documentId,
      body: {
        password: password,
        updated_at: Date.now(),
      },
    });

    console.log("response", response);

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
