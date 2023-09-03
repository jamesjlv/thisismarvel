import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetSeriesServiceNamespace } from "@/domain";

export class GetRemoteSeriesService
  implements GetSeriesServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetSeriesServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec(): Promise<GetSeriesServiceNamespace.Model["data"]> {
    let response = await this.httpClient.request({
      method: HttpMethod.Get,
      url: this.url,
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
