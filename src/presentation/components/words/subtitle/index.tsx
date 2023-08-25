import React from "react";

import { Container } from "./styles";
import { SubtitleProps } from "./props";

export const Subtitle: React.FC<SubtitleProps> = ({ text, ...rest }) => {
  return <Container {...rest}>{text}</Container>;
};
