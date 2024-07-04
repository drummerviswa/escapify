import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import NavBar from "../components/NavBar";

const TimeTable = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <>
      <View className={colorScheme == "dark" ? "bg-black pt-10" : "pt-10"}>
        <NavBar />
      </View>
      <View className="h-screen w-screen dark:bg-black">
        <Text className="dark:text-blue-50">Your content</Text>
        <TouchableOpacity>
          <Text className="dark:text-blue-50">Toggle</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TimeTable;
