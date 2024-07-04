import { View, Text, Button, useColorScheme } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";

const Profile = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="dark:bg-black">
      <View className={colorScheme == "dark" ? "bg-black pt-10" : "pt-10"}>
        <NavBar />
      </View>
      <GestureHandlerRootView>
        <View className="h-screen w-screen dark:bg-black">
          <View className="flex-1 items-center justify-center">
            <Button
              title="Go back"
              color="crimson"
              onPress={() => navigation.goBack()}
            />
            <Text className="dark:text-blue-50">TimeTable</Text>
          </View>
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

export default Profile;
