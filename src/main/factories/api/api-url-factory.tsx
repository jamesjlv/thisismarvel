import { APIsConfig } from "@/infra/config/api";

const { baseURL, release } = APIsConfig.MarvelAPI;

export const manufactureApiUrl = (path: string): string =>
  `${baseURL}/${release}/${path}`;
