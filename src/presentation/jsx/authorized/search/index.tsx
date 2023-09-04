import React, { useState } from "react";

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

export const SearchScreen = () => {
  const { comics } = useMarvel();
  const [selected, setSelected] = useState<SelectedFilter>("characters");
  const [comicsFiltered, setComicsFiltered] = useState(comics);

  return (
    <Container>
      <Header>
        <SearchInput
          iconName="Search"
          placeHolder="Faça sua busca"
          type="secondary"
        />
      </Header>
      <Content>
        <OptionSection>
          <OptionButton
            selected={selected === "characters"}
            onPress={() => setSelected("characters")}
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
        </ContentWrapper>
      </Content>
    </Container>
  );
};
