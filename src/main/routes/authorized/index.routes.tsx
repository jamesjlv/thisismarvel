import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Routes } from "../enums/Routes";
import {
  ManufactureHomeScreen,
  ManufactureDetailsScreen,
  ManufactureSearchScreen,
} from "@/main/screens";

const Stack = createStackNavigator();

export const InitialAuthorizedRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{
      headerShown: false,

      ...TransitionPresets.ScaleFromCenterAndroid,
    }}
  >
    <Stack.Screen name={Routes.Home} component={ManufactureHomeScreen} />
    <Stack.Screen
      name={Routes.Details}
      component={ManufactureDetailsScreen}
      options={{}}
    />
    <Stack.Screen name={Routes.Search} component={ManufactureSearchScreen} />
  </Stack.Navigator>
);
