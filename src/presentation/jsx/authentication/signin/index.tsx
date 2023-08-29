import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CryptoJS from "crypto-js/md5";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { Routes } from "@/main/routes/enums/Routes";
import { YUP_VALIDATION } from "./helpers";

export const SignInScreen: React.FC<SignInScreenProps> = ({
  handleCreateNewUserAccount,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { goBack, navigate } = useNavigation();
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
    resolver: yupResolver(YUP_VALIDATION),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      setIsLoading(true);
      const currentDate = new Date().getTime();
      const { password, name, email } = data;

      await handleCreateNewUserAccount.exec({
        password: CryptoJS(password).toString(),
        name,
        email,
        created_at: currentDate,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return;
    } finally {
      setIsLoading(false);
      navigate(Routes.Login, { password: data?.password, email: data?.email });
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
                hasError={!!errors?.name?.message}
                errorMessage={errors?.name?.message}
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
                hasError={!!errors?.email?.message}
                errorMessage={errors?.email?.message}
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
                isPassword
                hasError={!!errors?.password?.message}
                errorMessage={errors?.password?.message}
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
                isPassword
                type="primary"
                onChangeText={(e) => onChange(e)}
                onBlur={onBlur}
                value={value}
                hasError={!!errors?.confirmPassword?.message}
                errorMessage={errors?.confirmPassword?.message}
              />
            )}
            name="confirmPassword"
          />
        </FormContent>
        <ButtonContainer>
          <ButtonConfirm
            title="Cadastrar"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          />
          <GoBackButton
            types="secondary"
            title="Voltar"
            onPress={goBack}
            disabled={isLoading}
          />
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};
