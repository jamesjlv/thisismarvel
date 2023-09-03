import { scale } from "@/shared/styles";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* background-color: #000000; */
`;

export const ImageDetails = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  width: 100%;
  height: 60%;
`;

export const BackGroundOpacity = styled(LinearGradient).attrs({
  start: { x: 1, y: 0.0 },
  end: { x: 1, y: 0.6 },
  style: {
    alignItems: "center",
    justifyContent: "center",
  },
} as LinearGradientProps)`
  flex: 1;
`;
