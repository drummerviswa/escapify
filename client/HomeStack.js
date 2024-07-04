import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import { useColorScheme } from "nativewind";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "crimson",
        },
        animation:"slide_from_bottom"
      }}
    >
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
