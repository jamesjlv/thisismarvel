import { TextInputProps } from "react-native";
import { IconProps } from "../icons/props";

export type InputProps = TextInputProps & {
  errorMessage?: string;
  hasError?: boolean;
  mask?: "email" | "text";
  title?: string;
  placeHolder: string;
  type: "primary" | "secondary";
  iconName?: IconProps["iconName"];
  isPassword?: boolean;
};

export type ContainerInputStyleProps = {
  hasError: boolean;
};
export type InputWrapperStyleProps = {
  hasError: boolean;
};
