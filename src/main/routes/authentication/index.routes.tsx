import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  ManufactureForgotPasswordScreen,
  ManufactureLoginScreen,
  ManufactureOneTimeCodePasswordScreen,
  ManufacturePasswordRecoveryScreen,
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
    <Stack.Screen
      name={Routes.OneTimeCodePassword}
      component={ManufactureOneTimeCodePasswordScreen}
    />
    <Stack.Screen
      name={Routes.ForgotPassword}
      component={ManufactureForgotPasswordScreen}
    />
    <Stack.Screen
      name={Routes.ResetPassword}
      component={ManufacturePasswordRecoveryScreen}
    />
  </Stack.Navigator>
);
