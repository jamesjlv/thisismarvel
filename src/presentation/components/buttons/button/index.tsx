import React from "react";

import { Background, Container, Text } from "./styles";
import { ButtonProps } from "./props";

export const Button: React.FC<ButtonProps> = ({
  title = "Button",
  elements,
  ...rest
}) => {
  return (
    <Background
      source={require("../../../../assets/images/ButtonBackground.png")}
      {...elements?.containerProps}
    >
      <Container {...rest}>
        <Text text={title} />
      </Container>
    </Background>
  );
};
