import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetSeriesServiceNamespace } from "@/domain";

export class GetRemoteSeriesService
  implements GetSeriesServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetSeriesServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec(
    params: GetSeriesServiceNamespace.Params,
  ): Promise<GetSeriesServiceNamespace.Model["data"]> {
    const url = `${this.url}&orderBy=title&limit=${params?.limit || 23}${
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
        throw new Error("Cannot find series, try again later.");
      default:
        throw new Error("Cannot fetch data on marvels api.");
    }
  }
}
