import React, { useState } from "react";
import CryptoJS from "crypto-js/md5";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
import {
  PasswordRecoveryForm,
  PasswordRecoveryRouteParams,
  PasswordRecoveryScreenProps,
} from "./props";
import { YUP_VALIDATION } from "./helpers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAlert } from "@/presentation/hooks/methods/alert";
import { Routes, Stacks } from "@/main/routes/enums/Routes";

export const PasswordRecoveryScreen: React.FC<PasswordRecoveryScreenProps> = ({
  handleUpdatePassword,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { alert } = useAlert();
  const { navigate } = useNavigation();
  const params = useRoute()?.params as unknown as PasswordRecoveryRouteParams;
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
      setIsLoading(true);

      const response = await handleUpdatePassword.exec({
        confirmPassword: CryptoJS(confirmPassword).toString(),
        password: CryptoJS(password).toString(),
        documentId: params?.documentId,
      });
      alert({ type: "success", message: "Senha recuperada com sucesso." });
      navigate(Stacks.Authorization, { screen: Routes.Login });
    } catch (error) {
      alert({ type: "error", message: "Não foi possível recuperar a senha." });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container source={require("@assets/images/PasswordRecovery.png")}>
      <KeyboardAvoid>
        <Content testID="PasswordRecovery-Screen">
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
                  testID="PasswordRecovery-Input"
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
                  testID="PasswordRecovery-InputConfirm"
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
                testID="PasswordRecovery-RecoveryButton"
                title="recuperar"
                onPress={handleSubmit(handleRecoveryPassword)}
                loading={isLoading}
                disabled={isLoading}
              />
            </ButtonContainer>
          </FormContainer>
        </Content>
      </KeyboardAvoid>
    </Container>
  );
};
