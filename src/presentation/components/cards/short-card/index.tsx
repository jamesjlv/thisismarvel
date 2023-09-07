import React, { useState } from "react";
import { ShortCardInfoProps } from "./props";
import { Card, CardOpacity, CardTitle, Press } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main/routes/enums/Routes";
import { handleInfo } from "@/shared";
import { ActivityIndicator } from "react-native";

export const ShortCardInfo: React.FC<ShortCardInfoProps> = ({
  url,
  title = "Card Title",
  type,
  data,
}) => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Press
      testID="ShortCardInfoComponent"
      onPress={() =>
        navigate(Routes.Details, { type, url, ...handleInfo(data, type) })
      }
    >
      <Card
        testID="ShortCardInfoComponent-Image"
        source={{
          uri: url.includes("image_not_available")
            ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg"
            : url,
        }}
        onLoadEnd={() => setIsLoading(false)}
      >
        {isLoading ? (
          <ActivityIndicator
            testID="ShortCardInfoComponent-ActivityIndicator"
            size="small"
            style={{ flex: 1, backgroundColor: "#ccc" }}
          />
        ) : (
          <CardOpacity colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.41)"]}>
            <CardTitle testID="ShortCardInfoComponent-Title">{title}</CardTitle>
          </CardOpacity>
        )}
      </Card>
    </Press>
  );
};
