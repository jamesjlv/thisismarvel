import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";

export const TimeLineWrapper = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.moderateSize.xLarge};
`;

export const OrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

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

export const TimeLineDetail = styled.View``;

export const TimeLine = styled.Text.attrs({
  numberOfLines: 1,
})`
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
  ${({ theme, lastOne }) => css`
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

export const ItemTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    ${theme.text.Gilroy.SemiBold}
    font-size: ${theme.moderateSize.medium};
    line-height: ${theme.moderateSize.medium};
    color: ${theme.colors.primary.white};
    text-align: center;
    padding-right: ${theme.moderateSize.medium};
  `};
`;
