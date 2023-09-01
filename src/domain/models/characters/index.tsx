export interface ICharactersModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDataCharactersModel;
}
export interface IDataCharactersModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: ICharactersResultsModel[] | null;
}
export interface ICharactersResultsModel {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ICharactersComicsModel;
  series: ICharactterSeriesModel;
  stories: ICharacterStoriesModel;
  events: ICharacterEventsModel;
  urls?: ICharacterImageUrlsModel[] | null;
}
export interface Thumbnail {
  path: string;
  extension: string;
}
export interface ICharactersComicsModel {
  available: number;
  collectionURI: string;
  items?: Items[] | null;
  returned: number;
}
export interface Items {
  resourceURI: string;
  name: string;
  type: string;
}
export interface ICharactterSeriesModel {
  available: number;
  collectionURI: string;
  items?: Items[] | null;
  returned: number;
}
export interface ICharacterStoriesModel {
  available: number;
  collectionURI: string;
  items?: Items[] | null;
  returned: number;
}
export interface ICharacterEventsModel {
  available: number;
  collectionURI: string;
  items?: Items[] | null;
  returned: number;
}
export interface ICharacterImageUrlsModel {
  type: string;
  url: string;
}
