import styled from "styled-components/native";
import { Subtitle } from "../../words/subtitle";
import { scale } from "@/shared/styles";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";

export const COLORS = [
  "#00FFFF",
  "#17C8FF",
  "#329BFF",
  "#4C64FF",
  "#6536FF",
  "#8000FF",
];

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  min-height: ${scale(50)}px;
  width: 100%;
`;

export const SecondaryContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  min-height: ${scale(48)}px;
  border-radius: ${scale(15)}px;
  background-color: ${({ theme }) => theme.colors.primary.black};
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  align-items: center;
  border-radius: ${scale(15)}px;
`;

export const Text = styled(Subtitle)`
  font-size: ${({ theme }) => theme.moderateSize.xxMedium};
  line-height: ${scale(50)}px;
  color: ${({ theme }) => theme.colors.primary.white};
  text-align: center;
`;

export const TextSecondary = styled(Subtitle)`
  font-size: ${({ theme }) => theme.moderateSize.xxMedium};
  line-height: ${scale(47)}px;
  color: ${({ theme }) => theme.colors.primary.white};
  border-radius: ${scale(15)}px;
  text-align: center;
  align-self: center;
`;
export const TextThird = styled(Subtitle)`
  font-size: ${({ theme }) => theme.moderateSize.xxMedium};
  line-height: ${scale(47)}px;
  color: ${({ theme }) => theme.colors.primary.grey};
  border-radius: ${scale(15)}px;
  text-align: center;
  align-self: center;
`;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 1.0 },
  end: { x: 1.0, y: 1.0 },
  style: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
} as LinearGradientProps)<{ colors: string[] }>`
  align-items: center;
  border-radius: ${scale(15)}px;
  height: ${scale(50)}px;
  padding: 1px;
` as unknown as typeof LinearGradient;

export const Spinner = styled(ActivityIndicator)`
  height: ${scale(47)}px;
`;
