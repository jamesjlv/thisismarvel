import React from "react";

import { useFonts } from "expo-font";
import { ApplicationContextProviderManagement } from "../presentation/hooks/providers/index";
import { Routes } from "./routes/index.routes";

export default function App() {
  const [loaded] = useFonts({
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.otf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.otf"),
    "Gilroy-Heavy": require("../assets/fonts/Gilroy-Heavy.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  return (
    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  );
}
