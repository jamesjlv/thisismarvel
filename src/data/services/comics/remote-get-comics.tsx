import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetComicsServiceNamespace } from "@/domain";

export class GetRemoteComicsService
  implements GetComicsServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetComicsServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec(
    params: GetComicsServiceNamespace.Params,
  ): Promise<GetComicsServiceNamespace.Model["data"]> {
    const url = `${this.url}&limit=${params?.limit || 23}${
      params?.filter ? `&titleStartsWith=${params?.filter}` : undefined
    }`;

    let response = await this.httpClient.request({
      method: HttpMethod.Get,
      url,
    });

    switch (response.statusCode) {
      case HttpStatusCode.success:
        return response?.body?.data;
      case HttpStatusCode.notFound:
        throw new Error("Cannot find comics, try again later.");
      default:
        throw new Error("Cannot fetch data on marvels api.");
    }
  }
}
