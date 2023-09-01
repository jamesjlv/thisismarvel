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
  width: 100%;
`;

export const Header = styled.View`
  margin: 0 ${scale(58)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.xxMedium};
`;

export const OTPTitle = styled(Title)`
  text-align: center;
`;

export const OTPDescription = styled(Subtitle)`
  text-align: center;
`;

export const FormContainer = styled.View`
  margin: 0 ${scale(32)}px;
  min-height: ${scale(90)}px;
  /* background-color: red; */
`;

export const InputContainer = styled.View`
  flex-direction: row;
  min-height: ${scale(47)}px;
  justify-content: space-between;
`;

export const TouchableOneTimePassword = styled.TouchableOpacity``;

export const CodeInput = styled(Input).attrs({
  clearTextOnFocus: true,
  selectTextOnFocus: false,
  keyboardType: "number-pad",
  placeholder: "0",
  maxLength: 1,
})`
  max-width: ${scale(47)}px;
  text-align: center;
  align-items: center;
  padding-left: 0px;
`;
export const ButtonContainer = styled.View`
  margin: 0 ${scale(58)}px;
`;

export const NextButton = styled(Button).attrs(
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

export const ResendButton = styled(Button).attrs(
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
