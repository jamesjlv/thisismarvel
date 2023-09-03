import { IEventsModel } from "@/domain/models";

interface IGetEventsService {
  exec: (
    params: GetEventsServiceNamespace.Params,
  ) => Promise<GetEventsServiceNamespace.Model["data"]>;
}

export namespace GetEventsServiceNamespace {
  export type Params = {};

  export type Model = IEventsModel;

  export type Interface = IGetEventsService;
}
