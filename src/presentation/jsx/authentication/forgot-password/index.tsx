import React from "react";

import {
  Container,
  Content,
  EmailInput,
  ForgotDescription,
  ForgotTitle,
  FormContainer,
  Header,
  NextButton,
} from "./styles";
import { ForgotPasswordScreenProps } from "./props";
import { useRoute } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YUP_VALIDATION } from "./helpers";

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  handleSendEmailWithCodeForResetingPassword,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(YUP_VALIDATION),
  });

  const handleSendEmailOneTimeCodePassword: SubmitHandler<{
    email: string;
  }> = async ({ email }) => {
    try {
      const data = await handleSendEmailWithCodeForResetingPassword.exec({
        email,
      });
      console.log("Enviou");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container source={require("@assets/images/ForgotPassword.png")}>
      <Content>
        <Header>
          <ForgotTitle text="Esqueceu sua senha?" />
          <ForgotDescription text="Informe seu usuário para prosseguir" />
        </Header>
        <FormContainer>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <EmailInput
                title="Usuário"
                placeHolder="exemplo@mail.com.br"
                type="primary"
                iconName="Person"
                onChangeText={(e) => onChange(e.toLowerCase())}
                onBlur={onBlur}
                value={value}
                hasError={!!errors?.email?.message}
                errorMessage={errors?.email?.message}
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          <NextButton
            title="avançar"
            types="primary"
            onPress={handleSubmit(handleSendEmailOneTimeCodePassword)}
          />
        </FormContainer>
      </Content>
    </Container>
  );
};
