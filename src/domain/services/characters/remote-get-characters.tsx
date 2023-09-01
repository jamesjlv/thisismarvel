import { ICharactersModel } from "@/domain/models";

interface IGetCharactersService {
  exec: (
    params: GetCharacterServiceNamespace.Params,
  ) => Promise<GetCharacterServiceNamespace.Model>;
}

export namespace GetCharacterServiceNamespace {
  export type Params = {};

  export type Model = ICharactersModel;

  export type Interface = IGetCharactersService;
}
