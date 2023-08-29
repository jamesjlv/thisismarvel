import React from "react";

import {
  Background,
  COLORS,
  Container,
  Gradient,
  SecondaryContainer,
  Spinner,
  Text,
  TextSecondary,
} from "./styles";
import { ButtonProps } from "./props";

export const Button: React.FC<ButtonProps> = ({
  title = "Button",
  types = "primary",
  loading = false,
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
            {loading ? <Spinner /> : <Text text={title} />}
          </Container>
        </Background>
      )}
      {types === "secondary" && (
        <Gradient colors={COLORS}>
          <SecondaryContainer {...rest}>
            {loading ? <Spinner /> : <TextSecondary text={title} />}
          </SecondaryContainer>
        </Gradient>
      )}
    </>
  );
};
