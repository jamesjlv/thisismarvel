import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "../protocols";

export class HttpPostClientSpy implements HttpClient {
  url?: string;
  body?: any;
  response: HttpResponse = {
    statusCode: HttpStatusCode.success,
  };

  async request(params: HttpRequest): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return this.response;
  }
}
