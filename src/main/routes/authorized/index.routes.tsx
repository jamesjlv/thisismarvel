import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Routes } from "../enums/Routes";
import { ManufactureHomeScreen } from "@/main/screens";

const Stack = createStackNavigator();

export const InitialAuthorizedRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      ...TransitionPresets.ScaleFromCenterAndroid,
    }}
  >
    <Stack.Screen name={Routes.Home} component={ManufactureHomeScreen} />
  </Stack.Navigator>
);
