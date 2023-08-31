import {
  DatabaseClient,
  DatabaseEncode,
  DatabaseFilterCondition,
  DatabaseReturnStatusCode,
} from "@/data/database/firestore";
import {
  IUserRepositoryModel,
  RemoteAuthenticationLoginAccountNamespace,
} from "@/domain";

export class GetRemoteAuthenticationSimpleLoginService
  implements RemoteAuthenticationLoginAccountNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<RemoteAuthenticationLoginAccountNamespace.Model>,
    private readonly encodeJWT: DatabaseEncode<IUserRepositoryModel>,
  ) {}

  async exec(
    data: RemoteAuthenticationLoginAccountNamespace.Params,
  ): Promise<RemoteAuthenticationLoginAccountNamespace.Model> {
    const { email, password } = data;

    let response = await this.databaseClient.request({
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

    // Simulate server giving a token to app and authorized his access
    response.body["token"] = await this.encodeJWT.encode({
      email,
      name: response.body?.name,
    });

    const isAllowed =
      email === response.body?.email && password === response.body?.password;
    response.body["itsAllowed"] = isAllowed;

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
