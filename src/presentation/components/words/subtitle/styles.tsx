import styled, { css } from "styled-components/native";
import { scale } from "@/shared/styles";

export const Container = styled.Text`
  ${({ theme }) => css`
    ${theme.text.Gilroy.Medium}
    font-size: ${theme.moderateSize.xRegular};
    color: ${theme.colors.text.subtitle};
  `}
  line-height: ${scale(21)}px;
`;
