import React, { useState } from "react";

import {
  ListItem,
  Image,
  Title,
  Description,
  SeeDetails,
  ArrowIcon,
  ContentList,
  ImageLoading,
} from "./styles";
import { LongCardProps } from "./props";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main/routes/enums/Routes";
import { handleInfo } from "@/shared";

export const LongCard: React.FC<LongCardProps> = ({
  imageUrl = "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg",
  title = "Title",
  description = "Description",
  type = "characters",
  data,
  id,
}) => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const urlFormatted = imageUrl.includes("image_not_available")
    ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg"
    : imageUrl.replace("http", "https");

  return (
    <ListItem
      testID="LongCardComponent"
      onPress={() =>
        navigate(Routes.Details, {
          id,
          type,
          url: urlFormatted,
          ...handleInfo(data, type),
        })
      }
    >
      <Image
        testID="LongCardInfoComponent-Image"
        source={{
          uri: urlFormatted,
        }}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <ImageLoading testID="LongCardComponent-Loading" size="large" />
      )}
      <ContentList>
        <Title testID="LongCardComponent-Title">{title}</Title>
        <Description>{description}</Description>
      </ContentList>
      <SeeDetails>
        <ArrowIcon />
      </SeeDetails>
    </ListItem>
  );
};
