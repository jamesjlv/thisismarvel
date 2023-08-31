import styled from "styled-components/native";
import {
  Button,
  ButtonProps,
  Input,
  Subtitle,
  Title,
} from "@/presentation/components";
import { scale } from "@/shared/styles";

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

export const ForgotTitle = styled(Title)`
  text-align: center;
`;

export const ForgotDescription = styled(Subtitle)`
  text-align: center;
`;

export const FormContainer = styled.View`
  margin: 0 ${scale(58)}px;
`;

export const EmailInput = styled(Input).attrs({
  iconName: "Person",
})`
  max-width: ${scale(314)}px;
`;

export const NextButton = styled(Button).attrs(
  ({ theme }) =>
    ({
      elements: {
        containerProps: {
          style: {
            marginTop: scale(theme.sizes.small),
          },
        },
      },
    }) as ButtonProps,
)``;
