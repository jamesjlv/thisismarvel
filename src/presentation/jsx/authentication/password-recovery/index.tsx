import React from "react";

import {
  ButtonContainer,
  Container,
  Content,
  FormContainer,
  Header,
  KeyboardAvoid,
  PasswordInput,
  PasswordRecoveryDescription,
  PasswordRecoveryTitle,
  RecoverButton,
} from "./styles";
import { PasswordRecoveryScreenProps } from "./props";

export const PasswordRecoveryScreen: React.FC<
  PasswordRecoveryScreenProps
> = () => {
  return (
    <Container source={require("@assets/images/PasswordRecovery.png")}>
      <KeyboardAvoid>
        <Content>
          <Header>
            <PasswordRecoveryTitle text="Informe a nova senha" />
            <PasswordRecoveryDescription text="Informe abaixo a nova senha para sua conta." />
          </Header>
          <FormContainer>
            <PasswordInput
              title="Senha"
              placeHolder="Informe a sua senha"
              type="primary"
            />
            <PasswordInput
              title="Confirmação de senha"
              placeHolder="Confirme sua senha"
              type="primary"
            />
            <ButtonContainer>
              <RecoverButton title="recuperar" onPress={() => {}} />
            </ButtonContainer>
          </FormContainer>
        </Content>
      </KeyboardAvoid>
    </Container>
  );
};
