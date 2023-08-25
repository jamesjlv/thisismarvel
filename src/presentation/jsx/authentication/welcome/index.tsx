import React from "react";
import { StatusBar } from "react-native";

import {
  BackGroundImage,
  BlackGradient,
  Container,
  Content,
  Header,
  LittleObjects,
  LoginBackground,
  LoginDescription,
  LoginTitle,
  WrapperForm,
} from "./styles";

export function WelcomeScreen() {
  return (
    <>
      <StatusBar hidden />
      <Container>
        <BackGroundImage
          source={require("../../../../assets/images/BlackPanther.png")}
        />
        <BlackGradient />
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
          </Content>
        </WrapperForm>
      </Container>
    </>
  );
}
