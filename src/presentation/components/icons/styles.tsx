import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { IconPropsStyle } from "./props";
import { scale } from "@/shared/styles";

export const Container = styled(SvgXml).attrs<IconPropsStyle>(
  ({ theme, size = "large", color = "black" }) => ({
    width: scale(theme.sizes[size]),
    height: scale(theme.sizes[size]),
    fill: theme.colors.primary[color],
  }),
)<IconPropsStyle>``;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
