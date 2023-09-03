import {
  ICharactersResultsModel,
  IComicsResultsModel,
  IEventsResultsModel,
  ISeriesResultsModel,
} from "@/domain";

export type ShortCardInfoProps = {
  url: string;
  title: string;
  type: "events" | "characters" | "series" | "comics";
  data:
    | ICharactersResultsModel
    | ISeriesResultsModel
    | IComicsResultsModel
    | IEventsResultsModel;
};
