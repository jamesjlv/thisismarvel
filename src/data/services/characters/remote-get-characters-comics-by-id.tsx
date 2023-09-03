import { HttpClient, HttpMethod, HttpStatusCode } from "@/data/protocols";
import { GetCharacterComicsByIdServiceNamespace } from "@/domain";

export class GetRemoteCharactersComicsByIdService
  implements GetCharacterComicsByIdServiceNamespace.Interface
{
  constructor(
    private readonly httpClient: HttpClient<GetCharacterComicsByIdServiceNamespace.Model>,
    private readonly url: string,
  ) {}

  async exec({
    id,
    orderBy = "onsaleDate",
    qtd = 1,
  }: GetCharacterComicsByIdServiceNamespace.Params): Promise<
    GetCharacterComicsByIdServiceNamespace.Model["data"]
  > {
    let response = await this.httpClient.request({
      method: HttpMethod.Get,
      url: `${this.url}/${id}/comics?orderBy=${orderBy}&limit=${qtd}`,
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
