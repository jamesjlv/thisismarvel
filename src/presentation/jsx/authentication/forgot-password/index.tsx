import React, { useState } from "react";

import {
  Container,
  Content,
  EmailInput,
  ForgotDescription,
  ForgotTitle,
  FormContainer,
  Header,
  KeyboardAvoid,
  NextButton,
} from "./styles";
import { ForgotPasswordScreenProps } from "./props";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YUP_VALIDATION } from "./helpers";
import { useAlert } from "@/presentation/hooks/methods/alert";
import { Routes, Stacks } from "@/main/routes/enums/Routes";

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  handleSendEmailWithCodeForResetingPassword,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { alert } = useAlert();
  const { navigate } = useNavigation();
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
      setIsLoading(true);
      const data = await handleSendEmailWithCodeForResetingPassword.exec({
        email,
      });

      navigate(Stacks.Authorization, {
        screen: Routes.OneTimeCodePassword,
        params: data,
      });
    } catch (error) {
      console.log(error);
      alert({
        type: "error",
        message: "Usuário não encontrado, verifique o email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container source={require("@assets/images/ForgotPassword.png")}>
      <KeyboardAvoid>
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
                  keyboardType="email-address"
                />
              )}
              name="email"
            />
            <NextButton
              title="avançar"
              types="primary"
              onPress={handleSubmit(handleSendEmailOneTimeCodePassword)}
              loading={isLoading}
              disabled={isLoading}
            />
          </FormContainer>
        </Content>
      </KeyboardAvoid>
    </Container>
  );
};
