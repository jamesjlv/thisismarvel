import styled, { css } from "styled-components/native";
import { Subtitle } from "../words/subtitle";
import { Icons } from "../icons";
import { scale } from "@/shared/styles";
import {
  ContainerInputStyleProps,
  InputPropsStyle,
  InputWrapperStyleProps,
} from "./props";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

export const Container = styled.View<ContainerInputStyleProps>`
  min-height: ${({ hasError = false }) =>
    hasError ? scale(109) : scale(88)}px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.moderateSize.regular};
`;

export const Description = styled(Subtitle)``;

export const ErrorMessage = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary.red};
`;

export const Icon = styled(Icons)`
  margin: ${({ theme }) => theme.moderateSize.medium};
`;

export const InputWrapper = styled.ImageBackground.attrs({
  resizeMode: "stretch",
  width: scale(55),
})<InputWrapperStyleProps>`
  flex: 1;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.moderateSize.regular};
  max-height: ${scale(55)}px;
  border-radius: ${({ theme }) => theme.moderateSize.small};
  overflow: hidden;
  align-items: center;
  padding: ${({ theme }) => theme.moderateSize.medium};
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.colors.primary.red : "#FFFFFF"};
  border-width: 1px;
`;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 1.0 },
  end: { x: 1.0, y: 1.0 },
  style: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
} as LinearGradientProps)<InputWrapperStyleProps>`
  flex-direction: row;
  ${({ theme, hasError, type }) => css`
    margin-top: ${theme.moderateSize.regular};
    max-height: ${scale(55)}px;
    border-radius: ${type === "primary"
      ? theme.moderateSize.small
      : theme.moderateSize.xRegular};
    overflow: hidden;
    align-items: center;

    border-color: ${hasError
      ? theme.colors.primary.red
      : type === "primary"
      ? "#A09CA0"
      : theme.colors.primary.dark};
    border-width: ${type === "primary" ? 0.5 : 1}px;
  `}
`;

export const InputText = styled.TextInput.attrs<InputPropsStyle>(
  ({ theme, type }) => ({
    autoCapitalize: "none",
    placeholderTextColor:
      type === "primary" ? theme.colors.text.subtitle : theme.colors.text.dark,
  }),
)<InputPropsStyle>`
  flex: 1;
  ${({ theme, type }) => css`
    ${({ theme }) => theme.text.Gilroy.Medium}
    color: ${type === "primary"
      ? theme.colors.text.subtitle
      : theme.colors.text.dark};
    font-size: ${({ theme }) => theme.moderateSize.xRegular};
    min-height: ${scale(55)}px;
  `}
`;

export const ErrorWrapper = styled.View``;
