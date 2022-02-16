import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../colors";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textColor,
        headerStyle: {
          backgroundColor: colors.backgroundColor,
          borderBottomWidth: 0,
          borderWidth: 0,
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTintColor: colors.accent,
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="aperture-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/*
       <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" color={color} size={size} />
          ),
        }}
      /> 
 */
