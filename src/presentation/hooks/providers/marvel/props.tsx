import {
  GetCharacterServiceNamespace,
  GetComicsServiceNamespace,
  GetSeriesServiceNamespace,
  GetEventsServiceNamespace,
} from "@/domain";

export interface MarvelContextData {
  characters: GetCharacterServiceNamespace.Model["data"];
  comics: GetComicsServiceNamespace.Model["data"];
  series: GetSeriesServiceNamespace.Model["data"];
  events: GetEventsServiceNamespace.Model["data"];
  handleGetMarvelData: () => Promise<void>;
  isLoading: boolean;
}

export interface MarvelProviderProps {
  children: React.ReactNode;
}
