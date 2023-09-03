import React from "react";

import {
  BackGroundOpacity,
  Container,
  ContentDetails,
  Description,
  DetailsHeader,
  GoBackButton,
  Header,
  ImageDetails,
  ItemContent,
  ItemTitle,
  ItemWrapper,
  Primary,
  Qtd,
  QtdInfo,
  Secondary,
  Separator,
  ShortDetails,
  ShortDetailsWrapper,
  TimeDate,
  TimeLine,
  TimeLineWrapper,
  TimelineContent,
  TimelineHeader,
  Years,
  YearsTitle,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetailsRouteParams } from "./props";
import GoBackSVG from "@assets/icons/Arrow-Left.svg";
import ListIcon from "@assets/icons/sort-amount-down.svg";

export const DetailsScreen = () => {
  const params = useRoute()?.params as DetailsRouteParams;
  const { goBack } = useNavigation();
  return (
    <Container>
      <ImageDetails
        source={{
          uri: params.url,
        }}
      >
        <BackGroundOpacity
          colors={[
            "rgba(0, 0, 0, 0.0)",
            "rgba(0, 0, 0, 0.37)",
            "rgba(0, 0, 0, 0.57)",
            "rgba(0, 0, 0, 0.97)",
            "rgba(0, 0, 0, 1)",
          ]}
        >
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
            <Description>{params.description}</Description>
            <TimeLineWrapper>
              <TimelineHeader>
                <TimeDate>Data</TimeDate>
                <TimeLine>Timeline</TimeLine>
                <ListIcon />
              </TimelineHeader>
              <TimelineContent>
                <Years>
                  <YearsTitle>1602</YearsTitle>
                  <YearsTitle>1602</YearsTitle>
                </Years>
                <Separator />
                <ItemWrapper>
                  <ItemContent>
                    <ItemTitle>Spider-Man AI Apaec</ItemTitle>
                  </ItemContent>
                  <ItemContent lastOne>
                    <ItemTitle>Spider-Man AI Apaec</ItemTitle>
                  </ItemContent>
                </ItemWrapper>
              </TimelineContent>
            </TimeLineWrapper>
          </ContentDetails>
        </BackGroundOpacity>
      </ImageDetails>
    </Container>
  );
};
