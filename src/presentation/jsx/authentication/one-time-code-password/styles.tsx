import {
  Button,
  ButtonProps,
  Input,
  Subtitle,
  Title,
} from "@/presentation/components";
import { scale } from "@/shared/styles";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
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
  margin: 0 ${scale(58)}px;
`;

export const CodeInput = styled(Input).attrs({})`
  max-width: ${scale(314)}px;
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
