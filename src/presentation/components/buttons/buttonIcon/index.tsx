import React from "react";

import { Container, Image, Wrapper } from "./styles";
import { ButtonIconProps } from "./props";

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  elements,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Wrapper source={require("../../../../assets/images/ButtonIcon.png")}>
        <Image
          source={require("../../../../assets/images/Google.png")}
          {...elements?.imageContainer}
        />
      </Wrapper>
    </Container>
  );
};
