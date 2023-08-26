import { scale } from "@/shared/styles";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Wrapper = styled.ImageBackground.attrs({ resizeMode: "stretch" })`
  width: ${scale(58.1)}px;
  min-height: ${scale(44)}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(20)}px;
`;
