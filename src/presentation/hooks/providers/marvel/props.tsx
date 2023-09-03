import {
  GetCharacterServiceNamespace,
  GetComicsServiceNamespace,
  GetSeriesServiceNamespace,
} from "@/domain";

export interface MarvelContextData {
  characters: GetCharacterServiceNamespace.Model["data"];
  comics: GetComicsServiceNamespace.Model["data"];
  series: GetSeriesServiceNamespace.Model["data"];
  handleGetMarvelData: () => Promise<void>;
}

export interface MarvelProviderProps {
  children: React.ReactNode;
}
