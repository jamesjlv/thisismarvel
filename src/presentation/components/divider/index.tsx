import React from "react";

import { Container, Description, Line, LineInverted } from "./styles";
import { DividerProps } from "./props";

export const Divider: React.FC<DividerProps> = ({ text = "", ...rest }) => {
  return (
    <Container {...rest}>
      <Line />
      <Description text={text} />
      <LineInverted />
    </Container>
  );
};
