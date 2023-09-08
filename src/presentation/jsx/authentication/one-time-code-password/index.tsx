import React, {
  MutableRefObject,
  RefObject,
  useCallback,
  useRef,
  useState,
} from "react";

import {
  ButtonContainer,
  CodeInput,
  Container,
  Content,
  FormContainer,
  Header,
  InputContainer,
  KeyboardAvoid,
  NextButton,
  OTPDescription,
  OTPTitle,
  ResendButton,
  TouchableOneTimePassword,
} from "./styles";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { OTPRouteParams, OTPScreenParams } from "./props";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from "react-native";
import { scale } from "@/shared/styles";
import { Routes, Stacks } from "@/main/routes/enums/Routes";
import { useAlert } from "@/presentation/hooks/methods/alert";

export const OneTimeCodePasswordScreen: React.FC<OTPScreenParams> = ({
  handleVerifyOTP,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useRoute()?.params as OTPRouteParams;
  const { navigate } = useNavigation();
  const { alert } = useAlert();
  const lengthInput = 6;
  let clockCall: NodeJS.Timeout;

  async function handleResendOneTimePassword() {
    if (enableResendOneTimePasswordButton) {
      //add call to api

      setCountdown(countdownInitialValue);
      setEnableResendOneTimePasswordButton(false);
    }
  }

  const [
    enableConfirmOneTimePasswordButton,
    setEnableConfirmOneTimePasswordButton,
  ] = useState(false);

  const countdownInitialValue = 45;

  const [countdown, setCountdown] = useState(countdownInitialValue);

  const [
    enableResendOneTimePasswordButton,
    setEnableResendOneTimePasswordButton,
  ] = useState(false);

  const countdownFormatTime = new Date(new Date().setHours(0, 0, countdown))
    .toISOString()
    .substr(14, 5);

  const oneTimePasswordTextInputRefs: MutableRefObject<RefObject<TextInput>[]> =
    useRef(
      Array(lengthInput)
        .fill(null)
        .map(() => React.createRef<TextInput>()),
    );

  const oneTimePasswordTextInputValues = Array(lengthInput)
    .fill(null)
    .map(() => useState(""));

  function decrementClock() {
    if (countdown <= 1) {
      setCountdown(0);
      setEnableResendOneTimePasswordButton(true);
      clearInterval(clockCall);
    } else {
      setCountdown((previous) => previous - 1);
    }
  }

  function handleOneTimePasswordTextErase(
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ): void {
    if (
      e.nativeEvent.key === "." ||
      e.nativeEvent.key === "-" ||
      e.nativeEvent.key !== "Backspace" ||
      index === 0
    )
      return;

    const currentInput = oneTimePasswordTextInputValues[index];

    if (currentInput[0] === "") {
      oneTimePasswordTextInputRefs?.current[index - 1].current?.focus();
      oneTimePasswordTextInputValues[index - 1][1]("");
    }

    enableConfirmOneTimePasswordButton &&
      setEnableConfirmOneTimePasswordButton(false);
  }

  const handleVerifyOTPCode = async () => {
    try {
      setIsLoading(true);
      const code = Number(
        oneTimePasswordTextInputValues.map((i) => i[0]).join(""),
      );
      const verified = await handleVerifyOTP.exec({
        code,
        email: params?.email,
      });

      if (verified?.code == code && verified?.isValid) {
        navigate(Stacks.Authorization, {
          screen: Routes.ResetPassword,
          params: {
            email: params?.email,
            code,
            documentId: verified.documentId,
          },
        });
      } else {
        alert({
          type: "error",
          message: "Código invalido, tente novamente",
        });
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      if (isMounted) {
        clockCall = setInterval(() => {
          decrementClock();
        }, 1000);
      }
      return () => {
        clearInterval(clockCall);
        isMounted = false;
      };
    }, [navigate, countdown]),
  );

  return (
    <Container source={require("@/assets/images/OneTimeCodePassword.png")}>
      <KeyboardAvoid>
        <Content>
          <Header>
            <OTPTitle text="Insira o código" />
            <OTPDescription
              text={`Nós enviamos um código de \n 6 dígitos para o e-mail \n ${params?.email}`}
            />
          </Header>
          <FormContainer>
            <InputContainer>
              {Array(lengthInput)
                .fill(null)
                .map((_, index) => {
                  const [value, setValue] =
                    oneTimePasswordTextInputValues[index];

                  function handleInputFocus(e: string) {
                    setValue(e);
                    e !== "" &&
                      index + 1 < lengthInput &&
                      oneTimePasswordTextInputRefs?.current[
                        index + 1
                      ].current?.focus();

                    if (index + 1 === lengthInput && e !== "") {
                      setEnableConfirmOneTimePasswordButton(true);
                    } else {
                      enableConfirmOneTimePasswordButton &&
                        setEnableConfirmOneTimePasswordButton(false);
                    }
                  }

                  return (
                    <TouchableOneTimePassword
                      testID="OTP-TouchableOTP"
                      key={index}
                      onPress={() =>
                        oneTimePasswordTextInputRefs.current[
                          index
                        ].current?.focus()
                      }
                    >
                      <CodeInput
                        testID="OTP-Input"
                        elements={{
                          textInput: {
                            //@ts-ignore
                            ref: oneTimePasswordTextInputRefs.current[index],
                            style: {
                              paddingLeft: 0,
                              textAlign: "center",
                            },
                          },
                          container: {
                            style: {
                              width: scale(47),
                            },
                          },
                        }}
                        value={value}
                        onChangeText={(e) => handleInputFocus(e)}
                        onKeyPress={(e) =>
                          handleOneTimePasswordTextErase(index, e)
                        }
                        textContentType="oneTimeCode"
                      />
                    </TouchableOneTimePassword>
                  );
                })}
            </InputContainer>
          </FormContainer>
          <ButtonContainer>
            <NextButton
              testID="OTP-Next"
              title="avançar"
              onPress={handleVerifyOTPCode}
              loading={isLoading}
              disabled={isLoading}
            />
            <ResendButton
              testID="OTP-ResendCode"
              title={
                enableResendOneTimePasswordButton
                  ? "re-enviar código"
                  : `${countdownFormatTime} segundos...`
              }
              onPress={() => handleResendOneTimePassword()}
              types="secondary"
              disabled={isLoading}
            />
          </ButtonContainer>
        </Content>
      </KeyboardAvoid>
    </Container>
  );
};
