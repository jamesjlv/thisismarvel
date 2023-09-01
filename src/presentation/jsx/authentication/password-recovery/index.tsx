import React from "react";

import { Container } from "./styles";
import { PasswordRecoveryScreenProps } from "./props";

export const PasswordRecoveryScreen: React.FC<
  PasswordRecoveryScreenProps
> = () => {
  return (
    <Container
      source={require("@assets/images/PasswordRecovery.png")}
    ></Container>
  );
};
