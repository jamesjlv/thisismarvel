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
  SearchButtonWrapper,
} from "./styles";
import { useMarvel } from "@/presentation/hooks/providers/marvel";
import { ActivityIndicator, StatusBar } from "react-native";
import { ShortCardInfo } from "@/presentation/components";
import { FlatList } from "react-native-gesture-handler";
import { scale } from "@/shared/styles";

import { handleCreateUrlImage } from "@/shared";
import { useNavigation } from "@react-navigation/native";
import { Routes, Stacks } from "@/main/routes/enums/Routes";

export const HomeScreen: React.FC = () => {
  const { characters, comics, series, events, isLoading } = useMarvel();
  const { navigate } = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Header>
        <MarvelLogo />
        <SearchButtonWrapper
          onPress={() => navigate(Stacks.Authorized, { screen: Routes.Search })}
        >
          <Search iconName="Search" color="black" size="large" disabled />
        </SearchButtonWrapper>
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
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <CardContainer>
              <CardTitleHeader>Heróis</CardTitleHeader>
              {characters?.results && (
                <FlatList
                  data={characters?.results?.slice(0, 22)}
                  renderItem={({ item }) => (
                    <ShortCardInfo
                      url={handleCreateUrlImage(item.thumbnail)}
                      title={item.name}
                      type="characters"
                      data={item}
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
                      type="comics"
                      data={item}
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
                      type="series"
                      data={item}
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
              <CardTitleHeader>Eventos</CardTitleHeader>
              {events?.results && (
                <FlatList
                  data={events?.results?.slice(0, 22)}
                  renderItem={({ item }) => (
                    <ShortCardInfo
                      url={handleCreateUrlImage(item.thumbnail)}
                      title={item.title}
                      type="events"
                      data={item}
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
          </>
        )}
      </Content>
    </Container>
  );
};
