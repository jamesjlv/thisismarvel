import React, { useState } from "react";

import {
  Container,
  Description,
  ErrorMessage,
  Icon,
  InputText,
  InputWrapper,
} from "./styles";
import { InputProps } from "./props";

export const Input: React.FC<InputProps> = ({
  placeHolder,
  title,
  iconName,
  isPassword = false,
  hasError = false,
  errorMessage = "Campo inválido",
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

  return (
    <Container hasError={hasError} {...rest}>
      {title && <Description text={title} />}
      <InputWrapper
        source={require("../../../assets/images/InputBackGround.png")}
        hasError={hasError}
      >
        {iconName && (
          <Icon iconName={iconName} color="silver" size="large" disabled />
        )}
        <InputText
          placeholder={placeHolder}
          secureTextEntry={isPasswordVisible}
        />
        {isPassword && (
          <Icon
            iconName={isPasswordVisible ? "EyeOutline" : "Eye"}
            color="silver"
            size="large"
            onPress={() => setIsPasswordVisible((prevState) => !prevState)}
          />
        )}
      </InputWrapper>
      {hasError && <ErrorMessage text={errorMessage} />}
    </Container>
  );
};
