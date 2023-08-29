import {
  DatabaseClient,
  DatabaseFilterCondition,
  DatabaseReturnStatusCode,
} from "@/data/database/firestore";
import {
  RemoteAuthenticationLoginAccountNamespace,
  SetRegisterUserNamespace,
} from "@/domain";

export class GetRemoteAuthenticationSimpleLoginService
  implements RemoteAuthenticationLoginAccountNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<SetRegisterUserNamespace.Model>,
  ) {}

  async exec(
    data: RemoteAuthenticationLoginAccountNamespace.Params,
  ): Promise<RemoteAuthenticationLoginAccountNamespace.Model> {
    const { email, password } = data;

    const response = await this.databaseClient.request({
      collection: "users",
      filterBehavior: "and",
      filters: [
        {
          leftCondition: "email",
          condition: DatabaseFilterCondition.Equal,
          rightCondition: email,
        },
        {
          leftCondition: "password",
          condition: DatabaseFilterCondition.Equal,
          rightCondition: password,
        },
      ],
    });

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body as RemoteAuthenticationLoginAccountNamespace.Model;
      case DatabaseReturnStatusCode.forbidden:
        throw new Error("Problem log in, please try again later.");
      default:
        throw new Error("Unknown error, please try again later.");
    }
  }
}
