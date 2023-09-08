import { ICharactersModel } from "@/domain/models";

interface IGetCharactersService {
  exec: (
    params: GetCharacterServiceNamespace.Params,
  ) => Promise<GetCharacterServiceNamespace.Model["data"]>;
}

export namespace GetCharacterServiceNamespace {
  export type Params = {
    filter?: string;
    limit?: number;
    comics?: number | string;
    series?: number | string;
    events?: number | string;
    stories?: number | string;
  };

  export type Model = ICharactersModel;

  export type Interface = IGetCharactersService;

  export enum Filters {
    comics = "&comics=",
    series = "&series=",
    events = "&events=",
    stories = "&stories=",
  }
}
