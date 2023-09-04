import { IComicsModel } from "@/domain/models";

interface IGetComicsService {
  exec: (
    params: GetComicsServiceNamespace.Params,
  ) => Promise<GetComicsServiceNamespace.Model["data"]>;
}

export namespace GetComicsServiceNamespace {
  export type Params = { filter?: string };

  export type Model = IComicsModel;

  export type Interface = IGetComicsService;
}
