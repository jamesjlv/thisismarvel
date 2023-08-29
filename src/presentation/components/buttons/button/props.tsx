import { ImageBackgroundProps, TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  elements?: {
    containerProps?: ImageBackgroundProps;
  };
  types?: "primary" | "secondary" | "third";
};
