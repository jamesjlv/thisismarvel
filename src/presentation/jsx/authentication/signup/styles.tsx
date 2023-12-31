import {
  Button,
  ButtonProps,
  Input,
  Subtitle,
  Title,
} from "@/presentation/components";
import { scale } from "@/shared/styles";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
`;

export const SignInTitle = styled(Title)``;

export const Description = styled(Subtitle)``;

export const Header = styled.View`
  align-items: center;
  margin-top: ${scale(150)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.large};
`;

export const TextInput = styled(Input).attrs({
  type: "primary",
})``;

export const ButtonConfirm = styled(Button).attrs(
  ({ theme }) =>
    ({
      elements: {
        containerProps: {
          style: {
            marginBottom: scale(theme.sizes.medium),
          },
        },
      },
    }) as ButtonProps,
)``;

export const GoBackButton = styled(Button)``;

export const FormContent = styled.View`
  flex: 1;
  margin: ${({ theme }) => theme.moderateSize.large} ${scale(58)}px;
`;

export const ButtonContainer = styled.View`
  margin: 0 ${scale(58)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.large};
`;
