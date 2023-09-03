import React from "react";

import {
  Container,
  Header,
  MarvelLogo,
  Search,
  Content,
  CardContainer,
  CardTitleHeader,
  DescriptionContainer,
  Welcome,
  Choose,
  About,
} from "./styles";
import { useMarvel } from "@/presentation/hooks/providers/marvel";
import { StatusBar } from "react-native";
import { ShortCardInfo } from "@/presentation/components";
import { FlatList } from "react-native-gesture-handler";
import { scale } from "@/shared/styles";

import { ICharactersResultsModel } from "@/domain";

export const HomeScreen: React.FC = () => {
  const { characters, comics, series } = useMarvel();

  const handleCreateUrlImage = (item: ICharactersResultsModel["thumbnail"]) => {
    try {
      const extension = item.extension;
      const url = item.path;
      return `${url}.${extension}`;
    } catch (error) {
      return "";
    }
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Header>
        <MarvelLogo />
        <Search iconName="Search" color="black" size="large" />
      </Header>
      <DescriptionContainer>
        <Welcome>Bem vindo ao Pontua Marvel</Welcome>
        <Choose>Escolha o seu personagem</Choose>
        <About>
          O Universo Marvel é o universo compartilhado onde ocorrem as histórias
          na maioria dos títulos de quadrinhos americanos e outras mídias
          publicadas pela Marvel Entertainment.
        </About>
      </DescriptionContainer>
      <Content>
        <CardContainer>
          <CardTitleHeader>Heróis</CardTitleHeader>
          {characters?.results && (
            <FlatList
              data={characters?.results?.slice(0, 22)}
              renderItem={({ item }) => (
                <ShortCardInfo
                  url={handleCreateUrlImage(item.thumbnail)}
                  title={item.name}
                />
              )}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: scale(16),
              }}
            />
          )}
        </CardContainer>
        <CardContainer>
          <CardTitleHeader>Quadrinhos</CardTitleHeader>
          {comics?.results && (
            <FlatList
              data={comics?.results?.slice(0, 22)}
              renderItem={({ item }) => (
                <ShortCardInfo
                  url={handleCreateUrlImage(item.thumbnail)}
                  title={item.title}
                />
              )}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: scale(16),
              }}
            />
          )}
        </CardContainer>
        <CardContainer>
          <CardTitleHeader>Séries</CardTitleHeader>
          {series?.results && (
            <FlatList
              data={series?.results?.slice(0, 22)}
              renderItem={({ item }) => (
                <ShortCardInfo
                  url={handleCreateUrlImage(item.thumbnail)}
                  title={item.title}
                />
              )}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: scale(16),
              }}
            />
          )}
        </CardContainer>
      </Content>
    </Container>
  );
};
