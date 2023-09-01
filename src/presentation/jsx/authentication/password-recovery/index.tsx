import React from "react";

import {
  ButtonContainer,
  Container,
  Content,
  FormContainer,
  Header,
  KeyboardAvoid,
  PasswordInput,
  PasswordRecoveryDescription,
  PasswordRecoveryTitle,
  RecoverButton,
} from "./styles";
import { PasswordRecoveryForm, PasswordRecoveryScreenProps } from "./props";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YUP_VALIDATION } from "./helpers";

export const PasswordRecoveryScreen: React.FC<
  PasswordRecoveryScreenProps
> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryForm>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(YUP_VALIDATION),
  });

  const handleRecoveryPassword: SubmitHandler<PasswordRecoveryForm> = async ({
    password,
    confirmPassword,
  }): Promise<void> => {
    try {
      console.log(password, confirmPassword);
    } catch (error) {}
  };

  return (
    <Container source={require("@assets/images/PasswordRecovery.png")}>
      <KeyboardAvoid>
        <Content>
          <Header>
            <PasswordRecoveryTitle text="Informe a nova senha" />
            <PasswordRecoveryDescription text="Informe abaixo a nova senha para sua conta." />
          </Header>
          <FormContainer>
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
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
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
            <ButtonContainer>
              <RecoverButton
                title="recuperar"
                onPress={handleSubmit(handleRecoveryPassword)}
              />
            </ButtonContainer>
          </FormContainer>
        </Content>
      </KeyboardAvoid>
    </Container>
  );
};
