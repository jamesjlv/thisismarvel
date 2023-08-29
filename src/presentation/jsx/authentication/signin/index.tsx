import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CryptoJS from "crypto-js/md5";
import { useNavigation } from "@react-navigation/native";

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
  Wrapper,
} from "./styles";
import { SignInFormInputs, SignInScreenProps } from "./props";

export const SignInScreen: React.FC<SignInScreenProps> = ({
  handleCreateNewUserAccount,
}) => {
  const { goBack } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const currentDate = new Date().getTime();
      const { password, name, email } = data;

      await handleCreateNewUserAccount.exec({
        password: CryptoJS(password).toString(),
        name,
        email,
        created_at: currentDate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper source={require("@assets/images/SignIn.jpg")}>
      <Container>
        <Header>
          <SignInTitle text="Cadastro" />
          <Description text="Informe os dados abaixo para se cadastrar" />
        </Header>
        <FormContent>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeHolder="Informe seu nome completo"
                title="Nome Completo"
                iconName="Person"
                type="primary"
                onChangeText={(e) => onChange(e)}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeHolder="Informe seu e-mail"
                title="E-mail"
                iconName="Mail"
                type="primary"
                onChangeText={(e) => onChange(e)}
                onBlur={onBlur}
                value={value}
                textContentType="emailAddress"
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
              <TextInput
                placeHolder="Informe sua senha"
                iconName="Key"
                title="Senha"
                secureTextEntry
                type="primary"
                onChangeText={(e) => onChange(e)}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeHolder="Confirme sua senha"
                iconName="Key"
                title="Confirmação de Senha"
                secureTextEntry
                type="primary"
                onChangeText={(e) => onChange(e)}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="confirmPassword"
          />
        </FormContent>
        <ButtonContainer>
          <ButtonConfirm title="Cadastrar" onPress={handleSubmit(onSubmit)} />
          <GoBackButton types="secondary" title="Voltar" onPress={goBack} />
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};
