import React, { useEffect } from "react";
import { InitialAuthentizationRoutes } from "./authentication/index.routes";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes as RoutesEnum, Stacks } from "./enums/Routes";
import { InitialAuthorizedRoutes } from "./authorized/index.routes";
import { useAuthHook } from "@/presentation/hooks/providers/auth";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  const { token } = useAuthHook();
  useEffect(() => {
    if (token) {
      navigationRef.current?.navigate(Stacks.Authorized, {
        screen: RoutesEnum.Home,
      });
    }
  }, [token]);
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Stacks.Authorization}
          component={InitialAuthentizationRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Stacks.Authorized}
          component={InitialAuthorizedRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
