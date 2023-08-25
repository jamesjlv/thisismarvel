import React from "react";
import { ThemeProvider } from "styled-components/native";
import { ThemeProviderProps } from "./props";

export const AppThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => <ThemeProvider theme={{}}>{children}</ThemeProvider>;
