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

    if (response?.body?.email) {
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
      response.statusCode = DatabaseReturnStatusCode.success;
    } else {
      response.statusCode = DatabaseReturnStatusCode.notFound;
    }

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body as RemoteForgotPasswordServiveNamespace.Model;
      case DatabaseReturnStatusCode.notFound:
        throw new Error("Email not found.");
    }
  }
}
