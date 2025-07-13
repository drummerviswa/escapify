import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import { useColorScheme } from "nativewind";
import Leaves from "./screens/Leaves";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "crimson",
        },
        animation: "slide_from_right",
        animationDuration: 100,
      }}
    >
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Leaves" component={Leaves} />
    </Stack.Navigator>
  );
};

export default HomeStack;
