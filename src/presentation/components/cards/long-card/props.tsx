import {
  ICharacterComicsResultsModel,
  ICharactersResultsModel,
  IComicsResultsModel,
  IEventsResultsModel,
  ISeriesResultsModel,
} from "@/domain";

export interface LongCardProps {
  imageUrl: string;
  title: string;
  description: string;
  type: "characters" | "comics" | "events" | "series";
  data:
    | ICharactersResultsModel
    | ISeriesResultsModel
    | IComicsResultsModel
    | IEventsResultsModel
    | ICharacterComicsResultsModel;
  id?: string | number;
}
