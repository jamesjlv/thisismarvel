import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Gilroy-ExtraBold": require("./src/assets/fonts/Gilroy-ExtraBold.otf"),
    "Gilroy-Light": require("./src/assets/fonts/Gilroy-Light.otf"),
    "Gilroy-Heavy": require("./src/assets/fonts/Gilroy-Heavy.ttf"),
    "Gilroy-Medium": require("./src/assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Bold": require("./src/assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-SemiBold": require("./src/assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Regular": require("./src/assets/fonts/Gilroy-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={{}}>This is Marvel</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
