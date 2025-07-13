import { View, Pressable, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubjectBar = ({ item }) => {
  return (
    <Pressable disabled={true} className="flex">
      <View
        className="flex h-40 w-[375] my-2 flex-row justify-center items-center rounded-2xl"
        style={{
          backgroundColor: item?.Sub_ID % 2 == 0 ? "crimson" : "lightcoral",
        }}
      >
        <View className="flex w-2/3 px-5">
          <Text className="text-black text-2xl font-bold underline">{item?.Subject}</Text>
        </View>
        <View className="flex w-1/3">
          <Text className="text-black text-lg font-bold py-1.5">
            {item?.Credits} credits
          </Text>
          <Text className="text-black text-lg font-bold">
            {item?.Hours} hours
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SubjectBar;
