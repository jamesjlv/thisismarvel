export interface IEventsModel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data?: IEventsDataModel;
}
export interface IEventsDataModel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: IEventsResultsModel[] | null;
}
export interface IEventsResultsModel {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls?: IEventsUrlsModel[] | null;
  modified: string;
  start: string;
  end: string;
  thumbnail: IEventsThumbnailModel;
  creators: IEventsCreatorsModel;
  characters: IEventsCharactersModel;
  stories: IEventsStoriesModel;
  comics: IEventsComicsModel;
  series: IEventsSeriesModel;
  next: IEventsNextModel;
  previous: IEventsPreviousModel;
}
export interface IEventsUrlsModel {
  type: string;
  url: string;
}
export interface IEventsThumbnailModel {
  path: string;
  extension: string;
}
export interface IEventsCreatorsModel {
  available: number;
  collectionURI: string;
  items?: IEventsItemsModel[] | null;
  returned: number;
}
export interface IEventsItemsModel {
  resourceURI: string;
  name: string;
  role: string;
  type: string;
}
export interface IEventsCharactersModel {
  available: number;
  collectionURI: string;
  items?: IEventsItemsModel[] | null;
  returned: number;
}
export interface IEventsStoriesModel {
  available: number;
  collectionURI: string;
  items?: IEventsItemsModel[] | null;
  returned: number;
}
export interface IEventsComicsModel {
  available: number;
  collectionURI: string;
  items?: IEventsItemsModel[] | null;
  returned: number;
}
export interface IEventsSeriesModel {
  available: number;
  collectionURI: string;
  items?: IEventsItemsModel[] | null;
  returned: number;
}
export interface IEventsNextModel {
  resourceURI: string;
  name: string;
}
export interface IEventsPreviousModel {
  resourceURI: string;
  name: string;
}
