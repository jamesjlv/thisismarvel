import styled, { css } from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { scale } from "@/shared/styles";
import { Icons } from "@/presentation/components";
import MarvelLogoSVG from "@assets/icons/App-Bar-Logo.svg";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + scale(19)}px;
  min-height: ${scale(64)}px;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.moderateSize.large};
`;

export const Search = styled(Icons)`
  position: absolute;
  right: ${scale(28)}px;
`;

export const MarvelLogo = styled(MarvelLogoSVG)`
  width: ${scale(71)}px;
  height: ${scale(26)}px;
  flex: 1;
`;

export const DescriptionContainer = styled.View`
  padding: ${({ theme }) => theme.moderateSize.large};
`;

export const Welcome = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.SemiBold}
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.text.grey};
    margin-bottom: ${theme.moderateSize.small};
  `}
`;

export const Choose = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.xLarge};
    line-height: ${theme.moderateSize.xLarge};
    color: ${theme.colors.text.dark};
    margin-bottom: ${theme.moderateSize.small};
  `}
`;

export const About = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.SemiBold}
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.text.grey};
  `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const CardContainer = styled.View``;

export const CardTitleHeader = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Bold}
    font-size: ${theme.moderateSize.xMedium};
    line-height: ${theme.moderateSize.xMedium};
    color: ${theme.colors.primary.red};
    margin-bottom: ${theme.moderateSize.medium};
    padding-left: ${theme.moderateSize.large};
  `}
`;
