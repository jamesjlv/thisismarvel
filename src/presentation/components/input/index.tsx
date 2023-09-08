import React, { useState } from "react";

import {
  Container,
  Description,
  ErrorMessage,
  Gradient,
  Icon,
  InputText,
} from "./styles";
import { InputProps } from "./props";

export const Input: React.FC<InputProps> = ({
  placeHolder,
  title,
  iconName,
  isPassword = false,
  hasError = false,
  errorMessage = "Campo inválido",
  elements,
  type = "primary",
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

  return (
    <Container
      testID="InputComponent"
      hasError={hasError}
      {...rest}
      {...elements?.container}
    >
      {title && <Description testID="InputComponent-Title" text={title} />}
      <Gradient
        colors={["rgba(255, 255, 255, 0.231)", "rgba(16, 14, 14, 0.244)"]}
        hasError={hasError}
        type={type}
        {...elements?.gradient}
      >
        <>
          {iconName && (
            <Icon
              testID="InputComponent-Icon"
              iconName={iconName}
              color="silver"
              size="large"
              disabled
            />
          )}
          <InputText
            testID="InputComponent-InputText"
            type={type}
            placeholder={placeHolder}
            {...rest}
            {...elements?.textInput}
            secureTextEntry={isPasswordVisible}
          />
          {isPassword && (
            <Icon
              testID="InputComponent-PasswordIcon"
              iconName={isPasswordVisible ? "EyeOutline" : "Eye"}
              color="silver"
              size="large"
              onPress={() => setIsPasswordVisible((prevState) => !prevState)}
            />
          )}
        </>
      </Gradient>
      {hasError && (
        <ErrorMessage
          testID="InputComponent-ErrorMessage"
          text={errorMessage}
        />
      )}
    </Container>
  );
};
