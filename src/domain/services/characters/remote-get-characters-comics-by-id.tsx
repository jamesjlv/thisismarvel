import { ICharacterComicsByIdModel } from "@/domain/models";

interface IGetCharactersComicsByIdService {
  exec: (
    params: GetCharacterComicsByIdServiceNamespace.Params,
  ) => Promise<GetCharacterComicsByIdServiceNamespace.Model["data"]>;
}

export namespace GetCharacterComicsByIdServiceNamespace {
  export type Params = {
    id: string;
    orderBy: "onsaleDate" | "-onsaleDate";
    qtd: number;
  };

  export type Model = ICharacterComicsByIdModel;

  export type Interface = IGetCharactersComicsByIdService;
}
