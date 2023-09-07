import React from "react";

import { Container } from "./styles";
import { TitleProps } from "./props";

export const Title: React.FC<TitleProps> = ({ text, ...rest }) => {
  return (
    <Container testID="TitleComponent" {...rest}>
      {text}
    </Container>
  );
};
