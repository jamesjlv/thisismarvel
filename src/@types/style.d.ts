import "styled-components/native";
import { Color, Size, AppText, ModerateSize, Dimension } from "@/shared/styles";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof Color;
    sizes: typeof Size;
    text: typeof AppText;
    moderateSize: typeof ModerateSize;
    dimension: typeof Dimension;
  }
}
