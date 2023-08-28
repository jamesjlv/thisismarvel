/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse, HttpClient } from "@/data/protocols/http";
import Config from "react-native-config";
import Crypto from "crypto-js/md5";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const currentDate = new Date();
    const timestamp = currentDate.toISOString();

    axios.interceptors.request.use((config) => {
      config.params = config.params || {};
      config.params["apikey"] = Config.MARVEL_API_PUBLIC;
      config.params["ts"] = timestamp;
      config.params["hash"] = Crypto(
        `${timestamp}${Config.MARVEL_API_PRIVATE}${Config.MARVEL_API_PUBLIC}`,
      );
      return config;
    });

    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error?.message as unknown as AxiosResponse<string>;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
