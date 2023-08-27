import React from "react";

import {
  Background,
  Container,
  Gradient,
  SecondaryContainer,
  Text,
  TextSecondary,
} from "./styles";
import { ButtonProps } from "./props";

export const Button: React.FC<ButtonProps> = ({
  title = "Button",
  types = "primary",
  elements,
  ...rest
}) => {
  return (
    <>
      {types === "primary" && (
        <Background
          source={require("../../../../assets/images/ButtonBackground.png")}
          {...elements?.containerProps}
        >
          <Container {...rest}>
            <Text text={title} />
          </Container>
        </Background>
      )}
      {types === "secondary" && (
        <Gradient>
          <SecondaryContainer {...rest}>
            <TextSecondary text={title} />
          </SecondaryContainer>
        </Gradient>
      )}
    </>
  );
};
