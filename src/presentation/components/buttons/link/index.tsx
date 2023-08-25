import React from "react";

import { Container, Title } from "./styles";
import { LinkButtonProps } from "./props";

export const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  elements,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title text={text} {...elements?.textProps} />
    </Container>
  );
};
