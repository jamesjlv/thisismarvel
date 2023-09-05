import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetCharacterServiceNamespace } from "@/domain";

export class GetRemoteCharactersService
  implements GetCharacterServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetCharacterServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec(
    params: GetCharacterServiceNamespace.Params,
  ): Promise<GetCharacterServiceNamespace.Model["data"]> {
    const url = `${this.url}?&limit=${params?.limit || 23}${
      params?.filter ? `&nameStartsWith=${params?.filter}` : undefined
    }`;

    let response = await this.httpClient.request({
      method: HttpMethod.Get,
      url,
    });

    switch (response.statusCode) {
      case HttpStatusCode.success:
        return response?.body?.data;
      case HttpStatusCode.notFound:
        throw new Error("Cannot find characters, try again later.");
      default:
        throw new Error("Cannot fetch data on marvels api.");
    }
  }
}
