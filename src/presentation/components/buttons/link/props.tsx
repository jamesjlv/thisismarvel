import { TouchableOpacityProps } from "react-native";
import { SubtitleProps } from "../../words/subtitle/props";

export type LinkButtonProps = TouchableOpacityProps & {
  text: string;
  onPress: () => void;
  elements?: {
    textProps?: SubtitleProps;
  };
};
