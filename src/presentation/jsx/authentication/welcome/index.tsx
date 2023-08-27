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

export const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <StatusBar hidden />
      <Container source={require("@assets/images/Welcome.jpg")}>
        <WelcomeWrapper>
          <WelcomeTitle text="O universo Marvel na palma da sua mão." />
          <ButtonWrapper>
            <CreateAccountButton title="Cadastrar-se" />
            <SignInButton
              title="Faça login"
              onPress={() => {
                navigate("Login");
              }}
              types="secondary"
            />
          </ButtonWrapper>
        </WelcomeWrapper>
      </Container>
    </>
  );
};
