import React from "react";

import {
  ButtonConfirm,
  ButtonContainer,
  Container,
  Description,
  FormContent,
  GoBackButton,
  Header,
  SignInTitle,
  TextInput,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignInScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Container source={require("@assets/images/SignIn.jpg")}>
      <Header>
        <SignInTitle text="Cadastro" />
        <Description text="Informe os dados abaixo para se cadastrar" />
      </Header>
      <FormContent>
        <TextInput
          placeHolder="Informe seu nome completo"
          title="Nome Completo"
          iconName="Person"
          type="primary"
        />
        <TextInput
          placeHolder="Informe seu e-mail"
          title="E-mail"
          iconName="Mail"
          type="primary"
        />
        <TextInput
          placeHolder="Informe sua senha"
          iconName="Key"
          title="Senha"
          secureTextEntry
          type="primary"
        />
        <TextInput
          placeHolder="Confirme sua senha"
          iconName="Key"
          title="Confirmação de Senha"
          secureTextEntry
          type="primary"
        />
      </FormContent>
      <ButtonContainer>
        <ButtonConfirm title="Cadastrar" />
        <GoBackButton types="secondary" title="Voltar" onPress={goBack} />
      </ButtonContainer>
    </Container>
  );
};
