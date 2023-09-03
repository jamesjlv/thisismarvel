import styled, { css } from "styled-components/native";
import { Button, ButtonProps, Title } from "@/presentation/components";
import { scale } from "@/shared/styles";

export const Container = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  flex-direction: column-reverse;
`;

export const WelcomeWrapper = styled.View`
  ${({ theme: { moderateSize } }) => css`
    padding: ${moderateSize.xLarge} ${moderateSize.large};
  `}
`;

export const WelcomeTitle = styled(Title)``;

export const ButtonWrapper = styled.View`
  margin: ${({ theme }) => theme.moderateSize.xxLarge} 0;
`;

export const CreateAccountButton = styled(Button).attrs(
  ({ theme: { sizes } }) =>
    ({
      elements: {
        containerProps: {
          style: {
            marginBottom: scale(sizes.large),
          },
        },
      },
    }) as ButtonProps,
)``;

export const SignInButton = styled(Button)``;

export const DoItLater = styled(Button)`
  margin-top: ${({ theme }) => theme.moderateSize.regular};
`;
