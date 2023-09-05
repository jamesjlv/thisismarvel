import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";
import ArrowSVG from "@assets/icons/chevron-right.svg";

export const ListItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 100%;
  padding: ${({ theme }) => theme.moderateSize.regular};
  max-height: ${scale(143)}px;
  min-height: ${scale(143)}px;
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
export const ImageLoading = styled.ActivityIndicator`
  width: ${scale(96)}px;
  height: ${scale(119)}px;
  border-radius: ${({ theme }) => theme.moderateSize.xRegular};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.grey};
  position: absolute;
  left: ${({ theme }) => theme.moderateSize.regular};
  top: ${({ theme }) => theme.moderateSize.regular};
`;
export const Title = styled.Text.attrs({
  ellipsizeMode: "tail",
  numberOfLines: 2,
})`
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
  numberOfLines: 5,
})`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Light}
    font-size: ${theme.moderateSize.xRegular};
    line-height: ${theme.moderateSize.xRegular};
    color: ${theme.colors.primary.white};
    flex: 1;
    flex-wrap: wrap;
  `}
`;
export const SeeDetails = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  align-self: center;
`;
export const ArrowIcon = styled(ArrowSVG).attrs({ color: "#FFFFFF" })``;

export const ContentList = styled.View`
  flex: 1;
`;
