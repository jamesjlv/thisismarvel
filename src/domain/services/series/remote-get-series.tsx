import { ISeriesModel } from "@/domain/models";

interface IGetSeriesService {
  exec: (
    params: GetSeriesServiceNamespace.Params,
  ) => Promise<GetSeriesServiceNamespace.Model["data"]>;
}

export namespace GetSeriesServiceNamespace {
  export type Params = { filter?: string };

  export type Model = ISeriesModel;

  export type Interface = IGetSeriesService;
}
