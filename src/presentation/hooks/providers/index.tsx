import React, { ReactNode } from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface ApplicationContextProviderManagementProps {
  children: ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </AppThemeProvider>
    </GestureHandlerRootView>
  );
};
