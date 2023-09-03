import { GetCharacterServiceNamespace } from "@/domain";

export interface MarvelContextData {
  characters: GetCharacterServiceNamespace.Model["data"];
  handleGetCharacters: () => Promise<void>;
}

export interface MarvelProviderProps {
  children: React.ReactNode;
}
