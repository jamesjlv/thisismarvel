import faker from "@faker-js/faker";
import { HttpRequest } from "../protocols/http";

export const mockPostRequest = (params: HttpRequest): HttpRequest => ({
  ...params,
  url: faker.internet.url(),
  body: faker.random.objectElement({ key: "a" }),
});
