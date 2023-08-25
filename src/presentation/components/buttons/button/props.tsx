import { ImageBackgroundProps, TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  elements?: {
    containerProps?: ImageBackgroundProps;
  };
};
