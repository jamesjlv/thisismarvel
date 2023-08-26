import styled from "styled-components/native";
import SVGLine from "../../../assets/icons/Line.svg";
import { Subtitle } from "../words/subtitle";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled(SVGLine)``;

export const LineInverted = styled(SVGLine)`
  transform: rotate(180deg);
`;

export const Description = styled(Subtitle)`
  padding: ${({ theme }) => theme.moderateSize.small};
`;
