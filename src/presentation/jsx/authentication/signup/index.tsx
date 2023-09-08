import React, { useRef, useState } from "react";
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
  KeyboardAvoid,
  SignInTitle,
  TextInput,
  Wrapper,
} from "./styles";
import {
  InputOutlineMethods,
  SignUpFormInputs,
  SignUpScreenProps,
} from "./props";
import { Routes } from "@/main/routes/enums/Routes";
import { ErrorTranslate, YUP_VALIDATION } from "./helpers";
import { useAlert } from "@/presentation/hooks/methods/alert";

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  handleCreateNewUserAccount,
}) => {
  const { alert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const { goBack, navigate } = useNavigation();
  const inputName = useRef<InputOutlineMethods>(null);
  const inputEmail = useRef<InputOutlineMethods>(null);
  const inputPassword = useRef<InputOutlineMethods>(null);
  const inputPasswordConfirm = useRef<InputOutlineMethods>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(YUP_VALIDATION),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
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
    } catch (error: unknown) {
      setIsLoading(false);
      alert({
        type: "error",
        // @ts-ignore
        message: ErrorTranslate[error?.message || "default"],
      });
      return;
    } finally {
      setIsLoading(false);
      navigate(Routes.Login, { password: data?.password, email: data?.email });
    }
  };

  return (
    <Wrapper source={require("@assets/images/SignIn.jpg")}>
      <KeyboardAvoid>
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
                  returnKeyType="next"
                  onEndEditing={() => {
                    inputEmail.current?.focus();
                  }}
                  elements={{
                    textInput: {
                      ref: inputName,
                    },
                  }}
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
                  onChangeText={(e) => onChange(e.toLocaleLowerCase())}
                  onBlur={onBlur}
                  value={value}
                  textContentType="emailAddress"
                  hasError={!!errors?.email?.message}
                  errorMessage={errors?.email?.message}
                  returnKeyType="next"
                  onEndEditing={() => {
                    inputPassword.current?.focus();
                  }}
                  elements={{
                    textInput: {
                      ref: inputEmail,
                    },
                  }}
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
                  textContentType={"oneTimeCode"}
                  secureTextEntry
                  type="primary"
                  onChangeText={(e) => onChange(e)}
                  onBlur={onBlur}
                  value={value}
                  isPassword
                  hasError={!!errors?.password?.message}
                  errorMessage={errors?.password?.message}
                  returnKeyType="next"
                  onEndEditing={() => {
                    inputPasswordConfirm.current?.focus();
                  }}
                  elements={{
                    textInput: {
                      ref: inputPassword,
                    },
                  }}
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
                  textContentType={"oneTimeCode"}
                  type="primary"
                  onChangeText={(e) => onChange(e)}
                  onBlur={onBlur}
                  value={value}
                  hasError={!!errors?.confirmPassword?.message}
                  errorMessage={errors?.confirmPassword?.message}
                  elements={{
                    textInput: {
                      ref: inputPasswordConfirm,
                    },
                  }}
                  onEndEditing={() => handleSubmit(onSubmit)}
                  returnKeyType="go"
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
      </KeyboardAvoid>
    </Wrapper>
  );
};
