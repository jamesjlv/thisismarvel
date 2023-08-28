import React from "react";

import {
  ButtonWrapper,
  Container,
  CreateAccountButton,
  SignInButton,
  WelcomeTitle,
  WelcomeWrapper,
} from "./styles";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main/routes/enums/Routes";

export const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateLogin = () => {
    try {
      navigate(Routes.Login);
    } catch (error) {
      console.error("Não foi possível redirecionar para o login.");
    }
  };
  const handleNavigateNewAccount = () => {
    try {
      navigate(Routes.SignIn);
    } catch (error) {
      console.error("Não foi possível redirecionar para o cadastro.");
    }
  };

  return (
    <>
      <StatusBar hidden backgroundColor="transparent" translucent />
      <Container source={require("@assets/images/Welcome.jpg")}>
        <WelcomeWrapper>
          <WelcomeTitle text="O universo Marvel na palma da sua mão." />
          <ButtonWrapper>
            <CreateAccountButton
              title="Cadastrar-se"
              onPress={handleNavigateNewAccount}
            />
            <SignInButton
              title="Faça login"
              onPress={handleNavigateLogin}
              types="secondary"
            />
          </ButtonWrapper>
        </WelcomeWrapper>
      </Container>
    </>
  );
};
