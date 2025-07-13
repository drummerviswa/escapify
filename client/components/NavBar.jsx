import { View, Text, Image, TouchableOpacity, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NavBar = ({ press=null, opened=null }) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex rounded-b-2xl items-center flex-row bg-crimson dark:bg-black p-3 pt-12">
      <View className="flex-1 justify-start">
        {route.name == "Dashboard" ? (
          <Text className="text-black dark:text-white font-bold text-4xl">
            Escapify
          </Text>
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <Text className="text-black dark:text-white font-bold text-5xl">
              <Ionicons name={"arrow-back"} size={30} />
            </Text>
          </Pressable>
        )}
      </View>
      {route.name == "Dashboard" ? (
        <TouchableOpacity onPress={press}>
          <Ionicons
            name={opened ? "close" : "menu-sharp"}
            size={40}
            color="white"
          />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default NavBar;
