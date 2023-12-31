import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetEventsServiceNamespace } from "@/domain";

export class GetRemoteEventsService
  implements GetEventsServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetEventsServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec(
    params: GetEventsServiceNamespace.Params,
  ): Promise<GetEventsServiceNamespace.Model["data"]> {
    const url = `${this.url}&limit=${params?.limit || 23}${
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
        throw new Error("Cannot find events, try again later.");
      default:
        throw new Error("Cannot fetch data on marvels api.");
    }
  }
}
