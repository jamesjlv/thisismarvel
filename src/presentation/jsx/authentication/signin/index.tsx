import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

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
import { SignInFormInputs } from "./props";

export const SignInScreen = () => {
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

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => console.log(data);

  return (
    <Container source={require("@assets/images/SignIn.jpg")}>
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
  );
};
