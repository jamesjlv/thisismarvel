import React, { useEffect, useState } from "react";

import {
  ButtonText,
  Container,
  Content,
  ContentWrapper,
  Header,
  OptionButton,
  OptionSection,
  SearchInput,
} from "./styles";

import { LongCard } from "@/presentation/components";
import { SelectedFilter } from "./props";
import { useMarvel } from "@/presentation/hooks/providers/marvel";
import { handleCreateUrlImage } from "@/shared";
import { FlashList } from "@shopify/flash-list";
import {
  manufactureRemoteGetCharacters,
  manufactureRemoteGetComics,
  manufactureRemoteGetEvents,
  manufactureRemoteGetSeries,
} from "@/main";
import { ActivityIndicator } from "react-native";

export const SearchScreen = () => {
  const { comics, characters, series, events } = useMarvel();

  const [selected, setSelected] = useState<SelectedFilter>("characters");
  const [comicsFiltered, setComicsFiltered] = useState(comics);
  const [charactersFiltered, setCharactersFiltered] = useState(characters);
  const [seriesFiltered, setSeriesFiltered] = useState(series);
  const [eventsFiltered, setEventsFiltered] = useState(events);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterData = async () => {
    try {
      setIsLoading(true);
      switch (selected) {
        case "comics":
          const comicsResponse = await manufactureRemoteGetComics().exec({
            limit: 99,
            filter: searchText,
          });
          setComicsFiltered(comicsResponse);
          break;
        case "characters":
          const charactersResponse =
            await manufactureRemoteGetCharacters().exec({
              filter: searchText,
              limit: 99,
            });
          setCharactersFiltered(charactersResponse);
        case "series":
          const seriesResponse = await manufactureRemoteGetSeries().exec({
            filter: searchText,
            limit: 99,
          });
          setSeriesFiltered(seriesResponse);
        case "events":
          const eventsResponse = await manufactureRemoteGetEvents().exec({
            filter: searchText,
            limit: 99,
          });
          setEventsFiltered(eventsResponse);
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <SearchInput
          iconName="Search"
          placeHolder="Faça sua busca"
          type="secondary"
          keyboardType="default"
          returnKeyType="search"
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
          onEndEditing={handleFilterData}
        />
      </Header>
      <Content>
        <OptionSection>
          <OptionButton
            selected={selected === "characters"}
            onPress={() => {
              setSelected("characters");
            }}
          >
            <ButtonText selected={selected === "characters"} disabled>
              Heróis
            </ButtonText>
          </OptionButton>
          <OptionButton
            selected={selected === "comics"}
            onPress={() => setSelected("comics")}
          >
            <ButtonText selected={selected === "comics"} disabled>
              Quadrinhos
            </ButtonText>
          </OptionButton>
          <OptionButton
            selected={selected === "series"}
            onPress={() => setSelected("series")}
          >
            <ButtonText selected={selected === "series"} disabled>
              Séries
            </ButtonText>
          </OptionButton>
          <OptionButton
            selected={selected === "events"}
            onPress={() => setSelected("events")}
          >
            <ButtonText selected={selected === "events"} disabled>
              Eventos
            </ButtonText>
          </OptionButton>
        </OptionSection>
        <ContentWrapper>
          {selected === "comics" && !isLoading && (
            <FlashList
              data={comicsFiltered?.results}
              renderItem={({ item }) => (
                <LongCard
                  imageUrl={handleCreateUrlImage(item.thumbnail)}
                  title={item.title}
                  description={item.description}
                  type="characters"
                  data={item}
                  id={item.id}
                />
              )}
              estimatedItemSize={143}
              keyExtractor={(item) => `${item.id}+${item.title}`}
            />
          )}
          {selected === "characters" && !isLoading && (
            <FlashList
              data={charactersFiltered?.results}
              renderItem={({ item }) => (
                <LongCard
                  imageUrl={handleCreateUrlImage(item.thumbnail)}
                  title={item.name}
                  description={item.description}
                  type="characters"
                  data={item}
                  id={item.id}
                />
              )}
              estimatedItemSize={143}
              keyExtractor={(item) => `${item.id}+${item.name}`}
            />
          )}
          {selected === "events" && !isLoading && (
            <FlashList
              data={eventsFiltered?.results}
              renderItem={({ item }) => (
                <LongCard
                  imageUrl={handleCreateUrlImage(item.thumbnail)}
                  title={item.title}
                  description={item.description}
                  type="characters"
                  data={item}
                  id={item.id}
                />
              )}
              estimatedItemSize={143}
              keyExtractor={(item) => `${item.id}+${item.title}`}
            />
          )}
          {selected === "series" && !isLoading && (
            <FlashList
              data={seriesFiltered?.results}
              renderItem={({ item }) => (
                <LongCard
                  imageUrl={handleCreateUrlImage(item.thumbnail)}
                  title={item.title}
                  description={item.description || ""}
                  type="characters"
                  data={item}
                  id={item.id}
                />
              )}
              estimatedItemSize={143}
              keyExtractor={(item) => `${item.id}+${item.title}`}
            />
          )}
          {isLoading && (
            <ActivityIndicator size={"large"} style={{ flex: 1 }} />
          )}
        </ContentWrapper>
      </Content>
    </Container>
  );
};
