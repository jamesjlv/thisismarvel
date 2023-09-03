import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse, HttpClient } from "@/data/protocols/http";
import Config from "react-native-config";
import Crypto from "crypto-js/md5";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const ts = Date.now();
    const hash = Crypto(
      `${ts}${Config.MARVEL_API_PRIVATE}${Config.MARVEL_API_PUBLIC}`,
    ).toString();
    const apikey = Config.MARVEL_API_PUBLIC;

    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data?.url,
        method: data?.method,
        data: data?.body,
        headers: data?.headers,
        params: {
          ts,
          hash,
          apikey,
        },
      });
    } catch (error) {
      console.error(error);
      axiosResponse = error?.message as unknown as AxiosResponse<string>;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
