import React from "react";
import { ShortCardInfoProps } from "./props";
import { Card, CardOpacity, CardTitle, Press } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main/routes/enums/Routes";
import {
  ICharactersResultsModel,
  IComicsResultsModel,
  IEventsResultsModel,
} from "@/domain";

export const ShortCardInfo: React.FC<ShortCardInfoProps> = ({
  url,
  title = "Card Title",
  type,
  data,
}) => {
  const { navigate } = useNavigation();

  const handleInfo = () => {
    switch (type) {
      case "comics":
        const comics = data as IComicsResultsModel;
        return {
          title: comics.title,
          subtitle: "Marvel",
          interesting: [
            { title: "Histórias", qtd: comics.stories.available },
            { title: "Eventos", qtd: comics.events.available },
            { title: "Heróis", qtd: comics.characters?.available },
          ],
          description: comics.description,
        };
      case "characters":
        const characters = data as ICharactersResultsModel;
        return {
          title: characters.name,
          subtitle: "Marvel",
          interesting: [
            { title: "Histórias", qtd: characters.stories.available },
            { title: "Eventos", qtd: characters.events.available },
            { title: "Séries", qtd: characters.series.available },
            { title: "Quadrinhos", qtd: characters.comics.available },
          ],
          description: characters.description,
        };
      case "events":
        const events = data as IEventsResultsModel;
        return {
          title: events.title,
          subtitle: "Marvel",
          interesting: [
            { title: "Histórias", qtd: events.stories.available },
            { title: "Heróis", qtd: events.characters.available },
            { title: "Séries", qtd: events.series.available },
            { title: "Quadrinhos", qtd: events.comics.available },
          ],
          description: events.description,
        };

      case "series":
        const series = data as IEventsResultsModel;
        return {
          title: series.title,
          subtitle: "Marvel",
          interesting: [
            { title: "Histórias", qtd: series.stories.available },
            { title: "Heróis", qtd: series.characters.available },
            { title: "Autores", qtd: series.creators.available },
            { title: "Quadrinhos", qtd: series.comics.available },
          ],
          description: series.description,
        };

      default:
        break;
    }
  };

  return (
    <Press
      onPress={() => navigate(Routes.Details, { type, url, ...handleInfo() })}
    >
      <Card
        source={{
          uri: url.includes("image_not_available")
            ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg"
            : url,
        }}
      >
        <CardOpacity colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.41)"]}>
          <CardTitle>{title}</CardTitle>
        </CardOpacity>
      </Card>
    </Press>
  );
};
