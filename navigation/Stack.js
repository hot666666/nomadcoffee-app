import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import colors from "../colors";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgroundColor },
        headerTintColor: colors.accent,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tabs"
        component={Tabs}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
