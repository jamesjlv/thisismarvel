import React from "react";

import { Container, Title } from "./styles";
import { LinkButtonProps } from "./props";

export const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  elements,
  ...rest
}) => {
  return (
    <Container testID="LinkButtonComponent" {...rest}>
      <Title
        testID="LinkButtonComponent-Title"
        text={text}
        {...elements?.textProps}
      />
    </Container>
  );
};
