import {
  DatabaseClient,
  DatabaseResponse,
  DatabaseReturnStatusCode,
} from "@/data/database/firestore";
import { SetRegisterUserNamespace } from "@/domain";

export class SetRemoteRegisterUserService
  implements SetRegisterUserNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<SetRegisterUserNamespace.Model>,
  ) {}

  async exec(
    data: SetRegisterUserNamespace.Params,
  ): Promise<SetRegisterUserNamespace.Model> {
    const hasUser = (await this.databaseClient.request({
      collection: "users",
      filterBehavior: "unique",
      filters: [
        {
          leftCondition: "email",
          condition: "==",
          rightCondition: data?.email,
        },
      ],
    })) as unknown as DatabaseResponse<SetRegisterUserNamespace.Model>;

    if (hasUser.body.email) {
      throw new Error("Error, found another user with same e-mail.");
    }

    const response = await this.databaseClient.create({
      collection: "users",
      body: data,
    });

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body as SetRegisterUserNamespace.Model;
      case DatabaseReturnStatusCode.forbidden:
        throw new Error("Problem to create the user, please try again later.");
      default:
        throw new Error("Unknown error, please try again later.");
    }
  }
}
