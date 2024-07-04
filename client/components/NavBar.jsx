import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NavBar = ({ press,opened }) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View className="flex rounded-b-2xl items-center flex-row bg-crimson dark:bg-black p-3">
      <View className="flex-1 justify-start">
        {route.name == "Dashboard" ? (
          <Text className="text-black dark:text-white font-bold text-4xl">
            Escapify
          </Text>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-black dark:text-white font-bold text-4xl">
              👈🏻
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {route.name == "Dashboard" ? (
        <TouchableOpacity onPress={press}>
          <Ionicons name={opened?"close":"menu-sharp"} size={40} color="white" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default NavBar;
