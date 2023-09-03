export interface ISeriesModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ISeriesDataModel;
}
export interface ISeriesDataModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: ISeriesResultsModel[] | null;
}
export interface ISeriesResultsModel {
  id: number;
  title: string;
  description?: null;
  resourceURI: string;
  urls?: ISeriesUrlsModel[] | null;
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: ISeriesThumbnailModel;
  creators: ISeriesCreatorsModel;
  characters: ISeriesCharactersModel;
  stories: ISeriesStoriesModel;
  comics: ISeriesComicsModel;
  events: ISeriesEventsModel;
  next?: null;
  previous?: null;
}
export interface ISeriesUrlsModel {
  type: string;
  url: string;
}
export interface ISeriesThumbnailModel {
  path: string;
  extension: string;
}
export interface ISeriesCreatorsModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface ISeriesItemsModel {
  resourceURI: string;
  name: string;
  role: string;
  type: string;
}
export interface ISeriesCharactersModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface ISeriesStoriesModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface ISeriesComicsModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
export interface ISeriesEventsModel {
  available: number;
  collectionURI: string;
  items?: any[] | null;
  returned: number;
}
