import { ImageProps, TouchableOpacityProps } from "react-native";
import { SvgXml } from "react-native-svg";

export type IconProps = TouchableOpacityProps & {
  iconName:
    | "Age"
    | "Alien"
    | "Antihero"
    | "Back"
    | "Eye"
    | "Height"
    | "Hero"
    | "Human"
    | "Key"
    | "Marvel-Logo"
    | "Menu"
    | "Person"
    | "Search"
    | "Universe"
    | "Villain"
    | "Weight"
    | "EyeOutline";
  size: Sizes;
  color: Colors;
};

export type IconPropsStyle = typeof SvgXml & {
  size: Sizes;
  color: Colors;
};

export type Sizes =
  | "zero"
  | "min"
  | "smallest"
  | "small"
  | "xsmall"
  | "regular"
  | "xRegular"
  | "medium"
  | "xMedium"
  | "large"
  | "xLarge"
  | "xmLarge"
  | "xxLarge"
  | "xxxLarge"
  | "largest";

export type Colors =
  | "red"
  | "black"
  | "dark"
  | "grey"
  | "silver"
  | "white"
  | "title";
