import { View, Text } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";

const Leaves = () => {
  return (
    <>
      <NavBar />
      <View className="dark:bg-black flex-1 justify-center items-center">
        <Text className="dark:text-white">Leaves</Text>
      </View>
    </>
  );
};

export default Leaves;
