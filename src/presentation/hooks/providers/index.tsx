import React, { ReactNode } from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertProvider } from "../methods/alert";
import { GlobalComponents } from "@/presentation/components/global-components";

import { RealDatabaseProvider } from "@/infra/config/database";
import { AuthProvider } from "./auth";
import { MarvelProvider } from "./marvel";
interface ApplicationContextProviderManagementProps {
  children: ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RealDatabaseProvider>
        <NavigationProvider>
          <AuthProvider>
            <AppThemeProvider>
              <AlertProvider>
                <MarvelProvider>
                  <>
                    {children}
                    <GlobalComponents />
                  </>
                </MarvelProvider>
              </AlertProvider>
            </AppThemeProvider>
          </AuthProvider>
        </NavigationProvider>
      </RealDatabaseProvider>
    </GestureHandlerRootView>
  );
};
