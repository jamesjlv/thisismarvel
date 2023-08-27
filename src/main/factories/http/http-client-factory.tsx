import { AxiosHttpClient } from "@/infra";

export const manufactureHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient();
