import React from "react";

import {
  CodeInput,
  Container,
  Content,
  FormContainer,
  Header,
  NextButton,
  OTPDescription,
  OTPTitle,
  ResendButton,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { OTPRouteParams } from "./props";

export const OneTimeCodePasswordScreen = () => {
  const params = useRoute()?.params as OTPRouteParams;
  return (
    <Container source={require("@/assets/images/OneTimeCodePassword.png")}>
      <Content>
        <Header>
          <OTPTitle text="Insira o código" />
          <OTPDescription
            text={`Nós enviamos um código de \n 6 dígitos para o e-mail \n ${params?.email}`}
          />
        </Header>
        <FormContainer>
          <CodeInput type="primary" placeHolder="-" />
          <NextButton title="avançar" />
          <ResendButton title="re-enviar código" types="secondary" />
        </FormContainer>
      </Content>
    </Container>
  );
};
