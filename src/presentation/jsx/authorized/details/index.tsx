import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import GoBackSVG from "@assets/icons/Arrow-Left.svg";
import {
  manufactureRemoteGetCharacters,
  manufactureRemoteGetCharactersComicsById,
} from "@/main/services/characters";
import {
  ShortCardInfo,
  Timeline as TimeLineComponent,
} from "@/presentation/components";

import {
  BackGroundOpacity,
  COLORS,
  CardContainer,
  CardTitleHeader,
  Container,
  ContentDetails,
  Description,
  DetailsHeader,
  GoBackButton,
  Header,
  ImageDetails,
  Primary,
  Qtd,
  QtdInfo,
  Secondary,
  ShortDetails,
  ShortDetailsWrapper,
} from "./styles";

import { DetailsRouteParams, TimelineProps } from "./props";
import { FlashList } from "@shopify/flash-list";
import { handleCreateUrlImage } from "@/shared";
import {
  GetCharacterComicsByIdServiceNamespace,
  GetCharacterServiceNamespace,
} from "@/domain";
import { scale } from "@/shared/styles";
import { TouchableWithoutFeedback } from "react-native";

export const DetailsScreen = () => {
  const params = useRoute()?.params as DetailsRouteParams;
  const { goBack } = useNavigation();
  const [timeline, setTimeline] = useState<TimelineProps[]>([]);
  const [comics, setComics] =
    useState<GetCharacterComicsByIdServiceNamespace.Model["data"]>();
  const [characters, setCharacters] =
    useState<GetCharacterServiceNamespace.Model["data"]>();

  const handleTimelineData = async () => {
    try {
      if (params.type === "characters") {
        const promises = [
          manufactureRemoteGetCharactersComicsById().exec({
            id: params?.id!,
            orderBy: "onsaleDate",
            qtd: 1,
          }),
          manufactureRemoteGetCharactersComicsById().exec({
            id: params?.id!,
            orderBy: "-onsaleDate",
            qtd: 1,
          }),
        ];

        const responses = await Promise.allSettled(promises);
        let timelineArray: TimelineProps[] = [];

        for (let i = 0; i < responses.length; i++) {
          //@ts-ignore
          const title = responses[i]?.value?.results?.[0]?.title || "";
          //@ts-ignore
          const dateFiltered = responses[i]?.value?.results?.[0]?.dates?.filter(
            //@ts-ignore
            (date) => date.type === "onsaleDate",
          )[0].date as unknown as Date;

          const year = dateFiltered
            ? new Date(dateFiltered).getFullYear()
            : undefined;
          year &&
            timelineArray.push({ year: year === -1 ? "---" : year, title });
        }

        setTimeline(timelineArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetComics = async () => {
    try {
      const response = await manufactureRemoteGetCharactersComicsById().exec({
        id: params?.id!,
        qtd: 22,
        orderBy: "-onsaleDate",
      });

      setComics(response);
    } catch (error) {}
  };

  const handleGetCharacters = async () => {
    try {
      const paramsFilter = {
        comics: params.type === "comics" ? params.id : undefined,
        characters: params.type === "characters" ? params.id : undefined,
        events: params.type === "events" ? params.id : undefined,
        series: params.type === "series" ? params.id : undefined,
      };

      const response = await manufactureRemoteGetCharacters().exec({
        limit: 22,
        ...paramsFilter,
      });

      setCharacters(response);
    } catch (error) {}
  };

  const handleCarouselData = () => {
    switch (params.type) {
      case "characters":
        handleGetComics();
        break;

      default:
        handleGetCharacters();

        break;
    }
  };

  useEffect(() => {
    handleCarouselData();
    handleTimelineData();
  }, [params?.type]);

  return (
    <Container>
      <ImageDetails
        source={{
          uri: params.url,
        }}
      >
        <BackGroundOpacity colors={COLORS}>
          <Header>
            <GoBackButton onPress={() => goBack()}>
              <GoBackSVG />
            </GoBackButton>
          </Header>
          <DetailsHeader>
            <Secondary>{params?.subtitle}</Secondary>
            <Primary>{params?.title}</Primary>
          </DetailsHeader>
          <ShortDetailsWrapper>
            {params?.interesting?.map((item) => (
              <ShortDetails key={item.title}>
                <Qtd>{item.qtd}</Qtd>
                <QtdInfo>{item.title}</QtdInfo>
              </ShortDetails>
            ))}
          </ShortDetailsWrapper>
          <ContentDetails>
            {params?.description ? (
              <Description>{params.description}</Description>
            ) : (
              <Description>Sem detalhes</Description>
            )}
            {timeline?.length > 1 && <TimeLineComponent timeline={timeline} />}
            {params.type === "characters" && comics?.results && (
              <CardContainer>
                <CardTitleHeader>Quadrinhos</CardTitleHeader>
                <FlashList
                  data={comics?.results?.slice(0, 22)}
                  renderItem={({ item }) => (
                    <TouchableWithoutFeedback>
                      <ShortCardInfo
                        url={handleCreateUrlImage(item.thumbnail)}
                        title={item.title}
                        type="events"
                        data={item}
                      />
                    </TouchableWithoutFeedback>
                  )}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  estimatedItemSize={scale(144)}
                  keyExtractor={(item) => `${item.id}`}
                  scrollEnabled
                  contentContainerStyle={{
                    paddingHorizontal: scale(24),
                  }}
                />
              </CardContainer>
            )}
            {params.type !== "characters" && characters?.results && (
              <CardContainer>
                <CardTitleHeader>Personagens</CardTitleHeader>
                <FlashList
                  data={characters?.results?.slice(0, 22)}
                  renderItem={({ item }) => (
                    <TouchableWithoutFeedback>
                      <ShortCardInfo
                        url={handleCreateUrlImage(item.thumbnail)}
                        title={item.name}
                        type="events"
                        data={item}
                      />
                    </TouchableWithoutFeedback>
                  )}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  estimatedItemSize={scale(144)}
                  keyExtractor={(item) => `${item.id}`}
                  scrollEnabled
                  contentContainerStyle={{
                    paddingHorizontal: scale(24),
                  }}
                />
              </CardContainer>
            )}
          </ContentDetails>
        </BackGroundOpacity>
      </ImageDetails>
    </Container>
  );
};
