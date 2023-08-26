import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ManufactureLoginScreen,
  ManufactureWelcomeScreen,
} from "@/main/screens";

const Stack = createNativeStackNavigator();

export const InitialAuthenticationRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={ManufactureWelcomeScreen} />
      <Stack.Screen name="Login" component={ManufactureLoginScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
