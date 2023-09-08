import styled, { css } from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { scale } from "@/shared/styles";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const COLORS = [
  "rgba(0, 0, 0, 0.0)",
  "rgba(0, 0, 0, 0.37)",
  "rgba(0, 0, 0, 0.57)",
  "rgba(0, 0, 0, 0.97)",
  "rgba(0, 0, 0, 1)",
];

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scale(48),
  },
})`
  flex: 1;
  background-color: #000000;
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
  padding: ${({ theme }) => theme.moderateSize.large};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + scale(16)}px;
`;

export const DetailsHeader = styled.View``;

export const GoBackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Secondary = styled.Text`
  ${({ theme }) => css`
    opacity: 0.75;
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.medium};
    line-height: ${theme.moderateSize.medium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.small};
    margin-top: 70%;
  `}
`;
export const Primary = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.xmLarge};
    line-height: ${theme.moderateSize.xmLarge};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.xmLarge};
  `}
`;
export const ShortDetailsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ShortDetails = styled.View``;

export const Qtd = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Heavy}
    font-size: ${theme.moderateSize.xMedium};
    line-height: ${theme.moderateSize.xMedium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
    text-align: center;
  `}
`;
export const QtdInfo = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.regular};
    line-height: ${theme.moderateSize.regular};
    color: ${theme.colors.primary.white};
  `}
`;

export const ContentDetails = styled.View`
  flex: 1;
  margin-top: ${scale(28)}px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    opacity: 0.75;
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.medium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
  `}
`;

export const TimeLineWrapper = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.moderateSize.xLarge};
`;

export const TimelineHeader = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.moderateSize.xxMedium};
`;

export const TimeDate = styled.Text`
  width: ${scale(51)}px;
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    opacity: 0.75;
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
  `}
`;

export const TimeLineDateTime = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    opacity: 0.75;
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
  `}
`;

export const TimeLineTitle = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    opacity: 0.75;
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
  `}
`;

export const TimeLineDetail = styled.View``;

export const TimeLine = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    opacity: 0.75;
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.regular};
    padding-left: ${theme.moderateSize.medium};
  `};
`;

export const TimelineContent = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Years = styled.View`
  width: ${scale(51)}px;
`;

export const YearsTitle = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.medium};
    line-height: ${theme.moderateSize.medium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${({ theme }) => theme.moderateSize.xxMedium};
    height: 100%;
    max-height: ${scale(45)}px;
  `};
`;

export const Separator = styled.View`
  width: ${({ theme }) => theme.moderateSize.min};
`;

export const ItemWrapper = styled.View`
  border-left-width: ${scale(2)}px;
  border-color: ${({ theme }) => theme.colors.primary.white};
  padding-left: ${({ theme }) => theme.moderateSize.medium};
  flex: 1;
`;

export const ItemContent = styled.View<{ lastOne?: boolean }>`
  ${({ theme, lastOne = false }) => css`
    background-color: ${lastOne
      ? theme.colors.primary.dark
      : theme.colors.primary.pink};
    padding: ${theme.moderateSize.xsmall} 0;
    padding-left: ${theme.moderateSize.xxMedium};
    align-items: center;
    justify-content: center;
    border-radius: ${theme.moderateSize.medium};
    height: 100%;
    max-height: ${scale(45)}px;
    margin-bottom: ${theme.moderateSize.xxMedium};
  `}
`;

export const ItemTitle = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.SemiBold}
    font-size: ${theme.moderateSize.medium};
    line-height: ${theme.moderateSize.medium};
    color: ${theme.colors.primary.white};
    text-align: center;
  `};
`;

export const CardContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.moderateSize.xxLarge};
  margin-left: -${({ theme }) => theme.moderateSize.large};
  margin-right: -${({ theme }) => theme.moderateSize.large};
`;

export const CardTitleHeader = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Bold}
    font-size: ${theme.moderateSize.xxMedium};
    line-height: ${theme.moderateSize.xxMedium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${theme.moderateSize.medium};
    margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
    margin-left: ${({ theme }) => theme.moderateSize.large};
  `}
`;
