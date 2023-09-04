import {
  ICharacterComicsResultsModel,
  ICharactersResultsModel,
  IComicsResultsModel,
  IEventsResultsModel,
  ISeriesResultsModel,
} from "@/domain";

export const handleInfo = (
  data:
    | ICharactersResultsModel
    | ISeriesResultsModel
    | IComicsResultsModel
    | IEventsResultsModel
    | ICharacterComicsResultsModel,
  type: "characters" | "comics" | "events" | "series",
) => {
  switch (type) {
    case "comics":
      const comics = data as IComicsResultsModel;
      return {
        id: comics.id,
        title: comics.title,
        subtitle: "Marvel",
        interesting: [
          { title: "Histórias", qtd: comics.stories?.available || 0 },
          { title: "Eventos", qtd: comics.events?.available || 0 },
          { title: "Heróis", qtd: comics.characters?.available || 0 },
        ],
        description: comics.description,
      };
    case "characters":
      const characters = data as ICharactersResultsModel;
      return {
        id: characters.id,
        title: characters.name,
        subtitle: "Marvel",
        interesting: [
          { title: "Histórias", qtd: characters.stories?.available || 0 },
          { title: "Eventos", qtd: characters.events?.available || 0 },
          { title: "Séries", qtd: characters.series?.available || 0 },
          { title: "Quadrinhos", qtd: characters.comics?.available || 0 },
        ],
        description: characters.description,
      };
    case "events":
      const events = data as IEventsResultsModel;
      return {
        id: events.id,
        title: events.title,
        subtitle: "Marvel",
        interesting: [
          { title: "Histórias", qtd: events.stories?.available || 0 },
          { title: "Heróis", qtd: events.characters?.available || 0 },
          { title: "Séries", qtd: events.series?.available || 0 },
          { title: "Quadrinhos", qtd: events.comics?.available || 0 },
        ],
        description: events.description,
      };

    case "series":
      const series = data as IEventsResultsModel;
      return {
        id: series.id,
        title: series.title,
        subtitle: "Marvel",
        interesting: [
          { title: "Histórias", qtd: series.stories?.available || 0 },
          { title: "Heróis", qtd: series.characters?.available || 0 },
          { title: "Autores", qtd: series.creators?.available || 0 },
          { title: "Quadrinhos", qtd: series.comics?.available || 0 },
        ],
        description: series.description,
      };

    default:
      break;
  }
};
