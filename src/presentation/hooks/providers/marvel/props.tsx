import {
  GetCharacterServiceNamespace,
  GetComicsServiceNamespace,
} from "@/domain";

export interface MarvelContextData {
  characters: GetCharacterServiceNamespace.Model["data"];
  comics: GetComicsServiceNamespace.Model["data"];
  handleGetMarvelData: () => Promise<void>;
}

export interface MarvelProviderProps {
  children: React.ReactNode;
}
