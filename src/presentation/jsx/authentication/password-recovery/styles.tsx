import {
  Button,
  Input,
  Subtitle,
  Title,
  ButtonProps,
} from "@/presentation/components";
import { scale } from "@/shared/styles";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Header = styled.View`
  margin: 0 ${scale(77)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.xxMedium};
`;

export const PasswordRecoveryTitle = styled(Title)`
  text-align: center;
  flex: none;
`;

export const PasswordRecoveryDescription = styled(Subtitle)`
  text-align: center;
`;

export const FormContainer = styled.View`
  margin: 0 ${scale(58)}px;
`;

export const PasswordInput = styled(Input).attrs({
  iconName: "Key",
  isPassword: true,
  secureTextEntry: true,
  elements: {
    container: {
      style: {
        flex: -1,
      },
    },
  },
})``;

export const ButtonContainer = styled.View`
  flex: none;
`;

export const RecoverButton = styled(Button).attrs(
  ({ theme }) =>
    ({
      elements: {
        containerProps: {
          style: {
            marginTop: scale(theme.sizes.medium),
          },
        },
      },
    }) as ButtonProps,
)``;
