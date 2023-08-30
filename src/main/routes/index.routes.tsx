import React from "react";
import { InitialAuthentizationRoutes } from "./authentication/index.routes";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Routes as RoutesEnum, Stacks } from "./enums/Routes";
import { InitialAuthorizedRoutes } from "./authorized/index.routes";

export const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
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
