import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import {
  Apple,
  BackGroundImage,
  BlackGradient,
  ConfirmButton,
  Container,
  Content,
  CreateAccount,
  Facebook,
  ForgetPassword,
  FormContainer,
  Google,
  Header,
  LittleObjects,
  LoginBackground,
  LoginDescription,
  LoginTitle,
  PasswordInput,
  SocialLoginDivider,
  SocialLoginWrapper,
  UserInput,
  WrapperForm,
} from "./styles";

export function LoginScreen() {
  const theme = useTheme();
  return (
    <>
      <StatusBar hidden />
      <Container>
        <BackGroundImage
          source={require("../../../../assets/images/BlackPanther.png")}
        />
        <BlackGradient
          colors={["transparent", theme.colors.gradients.dark.bottom]}
        />
        <WrapperForm>
          <LoginBackground
            source={require("../../../../assets/images/Login.png")}
          />
          <LittleObjects
            source={require("../../../../assets/images/Objects.png")}
          />
          <Content>
            <Header>
              <LoginTitle text="Faça Login" />
              <LoginDescription text="seja bem-vindo novamente" />
            </Header>
            <FormContainer>
              <UserInput
                title="Usuário"
                placeHolder="exemplo@mail.com.br"
                type="primary"
                iconName="Person"
              />
              <PasswordInput
                title="Senha"
                placeHolder="Informe sua senha"
                type="primary"
              />
              <ForgetPassword text="Forgot Password?" onPress={() => {}} />
              <ConfirmButton title="entrar" />
              <SocialLoginDivider text="Faça login com" />
              <SocialLoginWrapper>
                <Google onPress={() => {}} />
                <Apple onPress={() => {}} />
                <Facebook onPress={() => {}} />
              </SocialLoginWrapper>
            </FormContainer>
          </Content>
        </WrapperForm>
      </Container>
    </>
  );
}
