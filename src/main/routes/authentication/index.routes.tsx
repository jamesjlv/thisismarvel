import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  ManufactureLoginScreen,
  ManufactureSignInScreen,
  ManufactureWelcomeScreen,
} from "@/main/screens";
import { Routes } from "../enums/Routes";

const Stack = createStackNavigator();

export const InitialAuthentizationRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName={Routes.Welcome}
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      ...TransitionPresets.ScaleFromCenterAndroid,
    }}
  >
    <Stack.Screen name={Routes.Welcome} component={ManufactureWelcomeScreen} />
    <Stack.Screen name={Routes.Login} component={ManufactureLoginScreen} />
    <Stack.Screen name={Routes.SignIn} component={ManufactureSignInScreen} />
  </Stack.Navigator>
);
