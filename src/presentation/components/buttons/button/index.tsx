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
  TextThird,
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
          testID="ButtonComponent-Primary"
          source={require("../../../../assets/images/ButtonBackground.png")}
          {...elements?.containerProps}
        >
          <Container {...rest}>
            {loading ? (
              <Spinner testID="ButtonComponent-PrimaryLoading" />
            ) : (
              <Text testID="ButtonComponent-PrimaryText" text={title} />
            )}
          </Container>
        </Background>
      )}
      {types === "secondary" && (
        <Gradient testID="ButtonComponent-Secondary" colors={COLORS}>
          <SecondaryContainer {...rest}>
            {loading ? (
              <Spinner testID="ButtonComponent-SecondaryLoading" />
            ) : (
              <TextSecondary text={title} />
            )}
          </SecondaryContainer>
        </Gradient>
      )}
      {types === "third" && (
        <Gradient
          testID="ButtonComponent-Third"
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
        >
          <Container {...rest}>
            {loading ? (
              <Spinner testID="ButtonComponent-ThirdLoading" />
            ) : (
              <TextThird testID="ButtonComponent-ThirdText" text={title} />
            )}
          </Container>
        </Gradient>
      )}
    </>
  );
};
