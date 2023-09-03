import React from "react";
import { ShortCardInfoProps } from "./props";
import { Card, CardOpacity, CardTitle } from "./styles";

export const ShortCardInfo: React.FC<ShortCardInfoProps> = ({
  url,
  title = "Card Title",
}) => {
  return (
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
  );
};
