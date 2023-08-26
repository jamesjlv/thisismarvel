import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimension, scale } from "@/shared/styles";
import {
  Title,
  Subtitle,
  Input,
  LinkButton,
  Button,
  Divider,
} from "@/presentation/components";
import { ButtonProps } from "@/presentation/components/buttons/button/props";
import { LinkButtonProps } from "@/presentation/components/buttons/link/props";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.white};
`;

export const BackGroundImage = styled.ImageBackground.attrs({
  resizeMode: "contain",
})`
  height: ${scale(712)}px;
  width: 100%;
  position: absolute;
`;

export const BlackGradient = styled(LinearGradient).attrs(({ theme }) => ({
  locations: [0.02, 0.45],
}))`
  flex: 1;
`;

export const LoginBackground = styled.Image.attrs({
  resizeMode: "cover",
})`
  position: absolute;
  width: ${scale(447)}px;
  height: ${scale(803)}px;
  border-top-left-radius: ${scale(59)}px;
  border-top-right-radius: ${scale(59)}px;
`;

export const WrapperForm = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  height: ${scale(Dimension.screenHeight * 0.8)}px;
  width: 100%;
  background-color: #000000;
  border-top-left-radius: ${scale(59)}px;
  border-top-right-radius: ${scale(33)}px;
`;

export const LittleObjects = styled.Image.attrs({
  resizeMode: "cover",
})`
  position: absolute;
  width: ${scale(430)}px;
  height: ${scale(215)}px;
  top: -${scale(50)}px;
`;

export const Content = styled.View`
  height: 100%;
  border-top-left-radius: ${scale(59)}px;
  border-top-right-radius: ${scale(33)}px;
  padding-top: ${scale(32)}px;
`;

export const LoginTitle = styled(Title)`
  text-align: center;
`;
export const LoginDescription = styled(Subtitle)`
  text-align: center;
`;

export const Header = styled.View``;

export const FormContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${({ theme }) => theme.moderateSize.medium};
`;

export const UserInput = styled(Input)`
  max-width: ${scale(314)}px;
`;
export const PasswordInput = styled(Input).attrs({
  isPassword: true,
  iconName: "Key",
  type: "primary",
})`
  max-width: ${scale(314)}px;
`;

export const ForgetPassword = styled(LinkButton)`
  flex-direction: row-reverse;
  width: ${scale(314)}px;
`;

export const CreateAccount = styled(LinkButton).attrs({
  elements: { textProps: { style: { textDecorationLine: "underline" } } },
} as LinkButtonProps)`
  align-self: center;
  font-size: ${({ theme }) => theme.moderateSize.regular};
`;

export const ConfirmButton = styled(Button).attrs(
  ({ theme }) =>
    ({
      elements: {
        containerProps: {
          style: {
            marginTop: scale(theme.sizes.large),
            width: scale(314),
          },
        },
      },
    }) as ButtonProps,
)``;

export const SocialLoginDivider = styled(Divider)`
  margin: ${({ theme }) => theme.moderateSize.xxMedium} 0;
`;
