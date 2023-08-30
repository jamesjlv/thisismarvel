import React, { ReactNode } from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertProvider } from "../methods/alert";
import { GlobalComponents } from "@/presentation/components/global-components";
import { RealmProvider } from "@realm/react";
import { RealDatabaseProvider } from "@/infra/config/database";
interface ApplicationContextProviderManagementProps {
  children: ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RealDatabaseProvider>
        <AppThemeProvider>
          <AlertProvider>
            <NavigationProvider>
              <>
                {children}
                <GlobalComponents />
              </>
            </NavigationProvider>
          </AlertProvider>
        </AppThemeProvider>
      </RealDatabaseProvider>
    </GestureHandlerRootView>
  );
};
