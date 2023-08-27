import { ImageBackgroundProps, TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  elements?: {
    containerProps?: ImageBackgroundProps;
  };
  types?: "primary" | "secondary" | "third";
};
