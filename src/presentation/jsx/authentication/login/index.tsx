import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useRoute } from "@react-navigation/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CryptoJS from "crypto-js/md5";
import { useNavigation } from "@react-navigation/native";

import {
  Apple,
  BackGroundImage,
  ConfirmButton,
  Container,
  Content,
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
import { LoginRouteParams, LoginScreenProps, UserLoginParams } from "./props";
import { YUP_VALIDATION } from "./helpers";
import { Routes, Stacks } from "@/main/routes/enums/Routes";
import { useAlert } from "@/presentation/hooks/methods/alert";
import { useAuthHook } from "@/presentation/hooks/providers/auth";

export const LoginScreen: React.FC<LoginScreenProps> = ({
  handleUserSimpleAuthentication,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useRoute()?.params as LoginRouteParams;
  const { navigate } = useNavigation();
  const { alert } = useAlert();
  const { handleUpdateProfile, handleUpdateToken, token, handleLogoff } =
    useAuthHook();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginParams>({
    defaultValues: {
      email: params?.email,
      password: params?.password,
    },
    resolver: yupResolver(YUP_VALIDATION),
  });

  const handleSimpleLogin: SubmitHandler<UserLoginParams> = async ({
    email,
    password,
  }): Promise<void> => {
    try {
      setIsLoading(true);
      const userExists = await handleUserSimpleAuthentication.exec({
        email,
        password: CryptoJS(password).toString(),
      });

      if (userExists.itsAllowed && userExists?.token) {
        await handleUpdateProfile({
          email: userExists.email,
          name: userExists.name,
        });
        await handleUpdateToken({
          id: userExists.documentId,
          token: userExists.token,
        });
        navigate(Stacks.Authorized, { screen: Routes.Home });
      } else {
        alert({ message: "E-mail e ou senha inválidos." });
      }
    } catch (error) {
      alert({ message: "Erro ao fazer login, tente novamente." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateForgotPassword = () => {
    try {
      navigate(Stacks.Authorization, { screen: Routes.ForgotPassword });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = () =>
    alert({ type: "error", message: "Login com Google não disponível." });
  const handleAppleLogin = () =>
    alert({ type: "error", message: "Login com Apple não disponível." });
  const handleFacebookLogin = () =>
    alert({ type: "error", message: "Login com Facebook disponível." });

  return (
    <>
      <StatusBar hidden />
      <Container>
        <BackGroundImage
          source={require("../../../../assets/images/BlackPanther.png")}
        >
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
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <UserInput
                      title="Usuário"
                      placeHolder="exemplo@mail.com.br"
                      type="primary"
                      iconName="Person"
                      defaultValue={params?.email}
                      onChangeText={(e) => onChange(e.toLowerCase())}
                      onBlur={onBlur}
                      value={value}
                      hasError={!!errors?.email?.message}
                      errorMessage={errors?.email?.message}
                      autoCapitalize="none"
                      textContentType="emailAddress"
                      keyboardType="email-address"
                      secureTextEntry
                    />
                  )}
                  name="email"
                />

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <PasswordInput
                      placeHolder="Informe sua senha"
                      iconName="Key"
                      title="Senha"
                      secureTextEntry
                      type="primary"
                      onChangeText={(e) => onChange(e)}
                      onBlur={onBlur}
                      value={value}
                      isPassword
                      hasError={!!errors?.password?.message}
                      errorMessage={errors?.password?.message}
                    />
                  )}
                  name="password"
                />
                <ForgetPassword
                  text="Forgot Password?"
                  onPress={handleNavigateForgotPassword}
                />
                <ConfirmButton
                  title="entrar"
                  onPress={handleSubmit(handleSimpleLogin)}
                  loading={isLoading}
                />
                <SocialLoginDivider text="Faça login com" />
                <SocialLoginWrapper>
                  <Google onPress={handleGoogleLogin} />
                  <Apple onPress={handleAppleLogin} />
                  <Facebook onPress={handleFacebookLogin} />
                </SocialLoginWrapper>
              </FormContainer>
            </Content>
          </WrapperForm>
        </BackGroundImage>
      </Container>
    </>
  );
};
