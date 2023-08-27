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

export const InitialAuthenticationRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      gestureEnabled: true,
      ...TransitionPresets.ScaleFromCenterAndroid,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Routes.Welcome}
        component={ManufactureWelcomeScreen}
      />
      <Stack.Screen name={Routes.Login} component={ManufactureLoginScreen} />
      <Stack.Screen name={Routes.SignIn} component={ManufactureSignInScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
