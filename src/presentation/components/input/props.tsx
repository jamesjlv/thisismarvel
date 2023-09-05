import { TextInput, TextInputProps, ViewProps } from "react-native";
import { IconProps } from "../icons/props";
import { LinearGradientProps } from "expo-linear-gradient";

export interface InputProps extends TextInputProps {
  errorMessage?: string;
  hasError?: boolean;
  mask?: "email" | "text";
  title?: string;
  placeHolder: string;
  type?: "primary" | "secondary" | "third";
  iconName?: IconProps["iconName"];
  isPassword?: boolean;
  elements?: {
    textInput?: TextInputProps;
    container?: ViewProps;
    gradient?: LinearGradientProps;
  };
  ref?: React.RefObject<TextInput>;
}

export type ContainerInputStyleProps = {
  hasError: boolean;
};
export type InputWrapperStyleProps = {
  hasError: boolean;
  type: "primary" | "secondary" | "third";
};

export type InputPropsStyle = {
  type: "primary" | "secondary" | "third";
};
