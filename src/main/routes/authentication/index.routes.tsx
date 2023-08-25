import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "@/presentation/jsx/authentication/welcome";

const Stack = createNativeStackNavigator();

export const InitialAuthenticationRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
