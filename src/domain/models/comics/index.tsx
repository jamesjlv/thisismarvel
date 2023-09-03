export interface IComicsModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IComicsDataModel;
}
export interface IComicsDataModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: IComicsResultsModel[] | null;
}
export interface IComicsResultsModel {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects?: ITextObjectsModel[] | null;
  resourceURI: string;
  urls?: IImageUrlsModel[] | null;
  series: ISeriesModel;
  variants?: any[] | null;
  collections?: any[] | null;
  collectedIssues?: any[] | null;
  dates?: IDatesModel[] | null;
  prices?: IPricesModel[] | null;
  thumbnail: IThumbnailModel;
  images?: IImagesModel[] | null;
  creators: ICreatorsModel;
  characters: IComicsCharactersModel;
  stories: IStoriesModel;
  events: IEventsModel;
}
export interface IImageUrlsModel {
  type: string;
  url: string;
}
export interface ISeriesModel {
  resourceURI: string;
  name: string;
}
export interface IVariantsModel {
  resourceURI: string;
  name: string;
}
export interface IDatesModel {
  type: string;
  date: string;
}
export interface IPricesModel {
  type: string;
  price: number;
}
export interface IThumbnailModel {
  path: string;
  extension: string;
}
export interface ICreatorsModel {
  available: number;
  collectionURI: string;
  items?: IItemsModel[] | null;
  returned: number;
}
export interface IItemsModel {
  resourceURI: string;
  name: string;
  role: string;
  type: string;
}
export interface IComicsCharactersModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface IStoriesModel {
  available: number;
  collectionURI: string;
  items?: IItemsModel[] | null;
  returned: number;
}
export interface IEventsModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface IImagesModel {
  path: string;
  extension: string;
}
export interface ITextObjectsModel {
  type: string;
  language: string;
  text: string;
}
export interface ICollectedIssuesModel {
  resourceURI: string;
  name: string;
}
