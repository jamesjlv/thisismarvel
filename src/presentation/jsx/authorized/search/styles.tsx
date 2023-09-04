import { Input } from "@/presentation/components";
import { scale } from "@/shared/styles";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";
import ArrowSVG from "@assets/icons/chevron-right.svg";
export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + scale(48)}px;
  padding: ${({ theme }) => theme.moderateSize.xsmall};
`;

export const Header = styled.View``;

export const SearchInput = styled(Input).attrs({
  elements: {
    gradient: {
      colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      style: {
        margin: 0,
      },
    },
    container: {
      style: {
        marginBottom: 0.1,
        height: scale(80),
      },
    },
    textInput: {
      style: {
        marginBottom: 0.1,
      },
    },
  },
})``;

export const Content = styled.View`
  flex: 1;
`;

export const OptionSection = styled.View`
  flex-direction: row;
`;
export const OptionButton = styled.TouchableOpacity<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    padding: ${theme.moderateSize.small} ${theme.moderateSize.medium};
    border-width: 1px;
    border-radius: ${scale(26)}px;
    margin-right: ${theme.moderateSize.smallest};
    background-color: ${selected ? theme.colors.primary.dark : "transparent"};
  `}
`;
export const ButtonText = styled.Text<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.regular};
    line-height: ${theme.moderateSize.regular};
    color: ${selected
      ? theme.colors.primary.white
      : theme.colors.primary.black};
  `}
`;

export const ContentWrapper = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.moderateSize.large};
`;
export const ContentList = styled.View`
  flex: 1;
`;

export const ListItem = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100%;
  padding: ${({ theme }) => theme.moderateSize.regular};
  max-height: ${scale(143)}px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.moderateSize.xRegular};
  margin-bottom: ${({ theme }) => theme.moderateSize.small};
`;
export const Image = styled.Image`
  width: ${scale(96)}px;
  height: ${scale(119)}px;
  border-radius: ${({ theme }) => theme.moderateSize.xRegular};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.moderateSize.xRegular};
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.xMedium};
    line-height: ${theme.moderateSize.xMedium};
    color: ${theme.colors.primary.white};
    margin-bottom: ${({ theme }) => theme.moderateSize.small};
  `}
`;
export const Description = styled.Text.attrs({
  ellipsizeMode: "tail",
  numberOfLines: 6,
})`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Light}
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    flex: 1;
  `}
`;
export const SeeDetails = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  align-self: center;
`;
export const ArrowIcon = styled(ArrowSVG).attrs({ color: "#FFFFFF" })``;
