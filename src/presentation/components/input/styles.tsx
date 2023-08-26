import styled from "styled-components/native";
import { Subtitle } from "../words/subtitle";
import { Icons } from "../icons";
import { scale } from "@/shared/styles";
import { ContainerInputStyleProps, InputWrapperStyleProps } from "./props";

export const Container = styled.View<ContainerInputStyleProps>`
  flex: 1;
  min-height: ${({ hasError }) => (hasError ? scale(109) : scale(88))}px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.moderateSize.regular};
`;

export const Description = styled(Subtitle)``;

export const ErrorMessage = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary.red};
`;

export const Icon = styled(Icons)``;

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
    hasError ? theme.colors.primary.red : "transparent"};
  border-width: 1px;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  autoCapitalize: "none",
  inputMode: "email",
  placeholderTextColor: theme.colors.text.subtitle,
}))`
  flex: 1;
  padding-left: ${scale(20)}px;
  color: ${({ theme }) => theme.colors.text.subtitle};
  ${({ theme }) => theme.text.Gilroy.Medium}
  font-size: ${({ theme }) => theme.moderateSize.xRegular};
`;

export const ErrorWrapper = styled.View``;
