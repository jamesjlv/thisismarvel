import React from "react";

import {
  Container,
  Content,
  EmailInput,
  ForgotDescription,
  ForgotTitle,
  FormContainer,
  Header,
  NextButton,
} from "./styles";

export const ForgotPasswordScreen: React.FC = () => {
  return (
    <Container source={require("@assets/images/ForgotPassword.png")}>
      <Content>
        <Header>
          <ForgotTitle text="Esqueceu sua senha?" />
          <ForgotDescription text="Informe seu usuário para prosseguir" />
        </Header>
        <FormContainer>
          <EmailInput
            title="Usuário"
            placeHolder="Informe seu e-mail"
            type="primary"
          />
          <NextButton title="avançar" types="primary" onPress={() => {}} />
        </FormContainer>
      </Content>
    </Container>
  );
};
