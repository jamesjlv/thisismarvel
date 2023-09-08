import { scale } from "@/shared/styles";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import styled, { css } from "styled-components/native";
import { ImageBackground } from "react-native";

export const Press = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })``;

export const Card = styled(ImageBackground).attrs({
  width: scale(140),
  height: scale(230),
})`
  width: ${scale(140)}px;
  height: ${scale(230)}px;
  border-radius: ${({ theme }) => theme.moderateSize.medium};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.moderateSize.medium};
`;

export const CardOpacity = styled(LinearGradient).attrs({
  start: { x: 1.0, y: 0.0 },
  end: { x: 1.0, y: 0.9 },
  style: {
    width: scale(140),
    alignItems: "center",
    justifyContent: "center",
  },
} as LinearGradientProps)`
  width: ${scale(140)}px;
  height: ${scale(230)}px;
  border-radius: ${({ theme }) => theme.moderateSize.medium};
  overflow: hidden;
  z-index: 2;
  flex-direction: column-reverse;
`;

export const CardTitle = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: "clip",
})`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.xMedium};
    line-height: ${theme.moderateSize.xMedium};
    color: ${theme.colors.primary.white};
    margin: ${theme.moderateSize.regular};
  `}
`;
