import { ImageProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type ButtonIconProps = {
  onPress: () => void;
  elements?: {
    container?: TouchableOpacity;
    imageContainer?: ImageProps;
  };
};
