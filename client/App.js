import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import TimeTable from "./screens/TimeTable";
import HomeStack from "./HomeStack";
import Subjects from "./screens/Subjects";
import Classes from "./screens/Classes";
import ExpandableCalendarScreen from "./screens/ExpandableCalendarScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <StatusBar
        style={colorScheme === "dark" ? "light" : "dark"}
        backgroundColor={colorScheme === "dark" ? "black" : "crimson"}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: colorScheme == "dark" ? "black" : "white",
              maxHeight: 90,
            },
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "TimeTable") {
                iconName = focused ? "stopwatch" : "stopwatch-outline";
              } else if (route.name === "Classes") {
                iconName = focused ? "book" : "book-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "crimson",
            tabBarInactiveTintColor: "gray",
            animationEnabled: true,
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="TimeTable" component={TimeTable} />
          <Tab.Screen name="Classes" component={ExpandableCalendarScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
