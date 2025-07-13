import { View, Text, Button, useColorScheme, SafeAreaView } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";

const Profile = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="dark:bg-black flex-1">
      <View className={colorScheme == "dark" ? "bg-black " : ""}>
        <NavBar />
      </View>
      <GestureHandlerRootView>
        <View className="flex items-center h-screen w-screen dark:bg-black">
          <View className="mt-3 h-1/6 w-1/3 flex items-center justify-center bg-teal-700 rounded-full">
            <Text className="pt-6 text-center text-white text-8xl font-extrabold">
              V
            </Text>
          </View>
          <View className="flex items-center justify-center h-28 w-screen">
            <View>
              <Text className="text-xl dark:text-white">Viswanathan P</Text>
            </View>
            <View>
              <Text className="text-md dark:text-white">2022242001</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-lg dark:text-white px-1">Msc Integrated</Text>
              <Text className="text-lg dark:text-white px-1">CS</Text>
            </View>
            <View className="flex">
              <Text className="text-lg dark:text-white px-1">Semester {1}</Text>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Profile;
