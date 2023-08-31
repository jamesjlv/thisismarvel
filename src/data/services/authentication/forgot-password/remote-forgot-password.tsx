import {
  DatabaseClient,
  DatabaseFilterCondition,
  DatabaseReturnStatusCode,
} from "@/data/database";
import { RemoteForgotPasswordServiveNamespace } from "@/domain";
import { GenerateForgotPasswordEmail } from "@/shared/helpers/GenerateEmail";

export class SetRemoteForgotPasswordService
  implements RemoteForgotPasswordServiveNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<RemoteForgotPasswordServiveNamespace.Model>,
  ) {}

  async exec(
    data: RemoteForgotPasswordServiveNamespace.Params,
  ): Promise<RemoteForgotPasswordServiveNamespace.Model> {
    const { email } = data;

    let response = await this.databaseClient.request({
      collection: "users",
      filterBehavior: "unique",
      filters: [
        {
          leftCondition: "email",
          condition: DatabaseFilterCondition.Equal,
          rightCondition: email,
        },
      ],
    });

    if (response.body.email) {
      const code = Math.floor(100000 + Math.random() * 900000);

      await this.databaseClient.create({
        collection: "codes",
        body: {
          message: GenerateForgotPasswordEmail(code),
          to: [email],
          code,
        },
      });
      response.body.code = code;
      response.statusCode = 200;
    }

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body as RemoteForgotPasswordServiveNamespace.Model;
      case DatabaseReturnStatusCode.forbidden:
        throw new Error("Problem to recover your password.");
      default:
        throw new Error("Unknown error, please try again later.");
    }
  }
}