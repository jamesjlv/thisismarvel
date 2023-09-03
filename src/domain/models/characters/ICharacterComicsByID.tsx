export interface ICharacterComicsByIdModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ICharacterComicsDataModel;
}
export interface ICharacterComicsDataModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: ICharacterComicsResultsModel[] | null;
}
export interface ICharacterComicsResultsModel {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects?: any[] | null;
  resourceURI: string;
  urls?: ICharacterComicsUrlsModel[] | null;
  series: ICharacterComicsSeriesModel;
  variants?: any[] | null;
  collections?: ICharacterComicsCollectionsModel[] | null;
  collectedIssues?: any[] | null;
  dates?: ICharacterComicsDatesModel[] | null;
  prices?: ICharacterComicsPricesModel[] | null;
  thumbnail: ICharacterThumbnailModel;
  images?: ICharacterComicsImagesModel[] | null;
  creators: ICharacterCreatorsModel;
  characters: ICharacterComicsCharactersModel;
  stories: ICharacterComicsStoriesModel;
  events: ICharacterComicsEventsModel;
}
export interface ICharacterComicsUrlsModel {
  type: string;
  url: string;
}
export interface ICharacterComicsSeriesModel {
  resourceURI: string;
  name: string;
}
export interface ICharacterComicsCollectedIssuesModel {
  resourceURI: string;
  name: string;
}
export interface ICharacterComicsDatesModel {
  type: string;
  date: string;
}
export interface ICharacterComicsPricesModel {
  type: string;
  price: number;
}
export interface ICharacterThumbnailModel {
  path: string;
  extension: string;
}
export interface ICharacterComicsImagesModel {
  path: string;
  extension: string;
}
export interface ICharacterCreatorsModel {
  available: number;
  collectionURI: string;
  items?: ICharacterComicsItemsModel[] | null;
  returned: number;
}
export interface ICharacterComicsItemsModel {
  resourceURI: string;
  name: string;
  role: string;
  type: string;
}
export interface ICharacterComicsCharactersModel {
  available: number;
  collectionURI: string;
  items?: ICharacterComicsItemsModel[] | null;
  returned: number;
}
export interface ICharacterComicsStoriesModel {
  available: number;
  collectionURI: string;
  items?: ICharacterComicsItemsModel[] | null;
  returned: number;
}
export interface ICharacterComicsEventsModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface ICharacterComicsCollectionsModel {
  resourceURI: string;
  name: string;
}
export interface ICharacterComicsTextObjectsModel {
  type: string;
  language: string;
  text: string;
}
