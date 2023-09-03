import React from "react";

import { BackGroundOpacity, Container, ImageDetails } from "./styles";
import { useRoute } from "@react-navigation/native";
import { DetailsRouteParams } from "./props";

export const DetailsScreen = () => {
  const params = useRoute()?.params as DetailsRouteParams;
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
            "rgba(0, 0, 0, 0.3)",
            "rgba(0, 0, 0, 0.57)",
            "rgba(0, 0, 0, 0.97)",
            "rgba(0, 0, 0, 1)",
          ]}
        ></BackGroundOpacity>
      </ImageDetails>
    </Container>
  );
};
