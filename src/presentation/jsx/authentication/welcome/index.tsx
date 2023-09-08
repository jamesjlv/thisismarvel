import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ButtonWrapper,
  Container,
  CreateAccountButton,
  DoItLater,
  SignInButton,
  WelcomeTitle,
  WelcomeWrapper,
} from "./styles";
import { Routes, Stacks } from "@/main/routes/enums/Routes";

export const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateLogin = () => {
    try {
      navigate(Routes.Login);
    } catch (error) {
      console.error("Não foi possível redirecionar para o login.");
    }
  };
  const handleNavigateHome = () => {
    try {
      navigate(Stacks.Authorized, { screen: Routes.Home });
    } catch (error) {
      console.error("Não foi possível redirecionar para o login.");
    }
  };

  const handleNavigateNewAccount = () => {
    try {
      navigate(Routes.SignUp);
    } catch (error) {
      console.error("Não foi possível redirecionar para o cadastro.");
    }
  };

  return (
    <>
      <StatusBar hidden backgroundColor="transparent" translucent />
      <Container source={require("@assets/images/Welcome.jpg")}>
        <WelcomeWrapper testID="WelcomeScreen">
          <WelcomeTitle text="O universo Marvel na palma da sua mão." />
          <ButtonWrapper>
            <CreateAccountButton
              testID="WelcomeScreen-Signup"
              title="Cadastrar-se"
              onPress={handleNavigateNewAccount}
            />
            <SignInButton
              testID="WelcomeScreen-Login"
              title="Faça login"
              onPress={handleNavigateLogin}
              types="secondary"
            />
            <DoItLater
              testID="WelcomeScreen-RedirectHome"
              title="Continuar sem login  →"
              onPress={handleNavigateHome}
              types="third"
            />
          </ButtonWrapper>
        </WelcomeWrapper>
      </Container>
    </>
  );
};
