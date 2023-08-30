import styled from "styled-components/native";
import { Subtitle } from "../words/subtitle";
import { Dimension, scale } from "@/shared/styles";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  position: absolute;
  bottom: ${({ theme }) => theme.moderateSize.xmLarge};
  margin: 0 ${({ theme }) => theme.moderateSize.large};
  background-color: ${({ theme }) => theme.colors.primary.red};
  border-width: 0.3px;
  border-color: ${({ theme }) => theme.colors.primary.white};
  align-items: center;
  padding: ${({ theme }) => theme.moderateSize.small};
  border-radius: ${({ theme }) => theme.moderateSize.small};
  width: ${Dimension.screenWidth - scale(48)}px;
`;

export const ErrorMessage = styled(Subtitle)`
  margin-left: ${({ theme }) => theme.moderateSize.medium};
  color: ${({ theme }) => theme.colors.primary.white};
`;
