import styled from "styled-components/native";
import { Subtitle } from "../../words/subtitle";
import { scale } from "@/shared/styles";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  min-height: ${scale(50)}px;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  align-items: center;
  border-radius: ${scale(15)}px;
`;

export const Text = styled(Subtitle)`
  font-size: ${({ theme }) => theme.moderateSize.xxMedium};
  line-height: ${scale(50)}px;
  color: ${({ theme }) => theme.colors.primary.white};
`;
