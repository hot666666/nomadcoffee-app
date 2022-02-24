import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          top: 0,
        },
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        options={{
          mode: "modal",
          headerStyle: {
            backgroundColor: "black",
            shadowOpacity: 0.3,
          },
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={tintColor} name="close" size={28} />
          ),
        }}
        name="Select"
        component={SelectPhoto}
      />
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
