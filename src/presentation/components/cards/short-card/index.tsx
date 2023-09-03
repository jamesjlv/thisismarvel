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
        uri: url
          ? url
          : "https://place-hold.it/140x230/b7b7b7?text=Sem%20imagem",
      }}
    >
      <CardOpacity colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.41)"]}>
        <CardTitle>{title}</CardTitle>
      </CardOpacity>
    </Card>
  );
};
