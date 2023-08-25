import styled, { css } from "styled-components/native";
import { scale } from "@/shared/styles";

export const Container = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.SemiBold}
    font-size: ${theme.moderateSize.xmLarge};
    color: ${theme.colors.text.title};
  `}
  line-height: ${scale(60)}px;
`;
