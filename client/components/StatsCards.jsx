import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const StatsCards = ({ navigation }) => {
  return (
    <View
      alwaysBounceHorizontal
      horizontal
      className="flex-1 w-screen py-1 px-0.5 gap-2"
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Leaves")}
        activeOpacity={0.7}
        className="bg-rose-600 px-6 py-10 rounded-lg items-center justify-evenly flex-row"
      >
        <Image
          source={require("../img/apps.png")}
          className="w-20 h-16 rounded-lg"
        />
        <Text className="text-white text-xl font-bold">
          Total Leaves: {0} days
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-rose-600 px-6 py-10 rounded-lg items-center justify-evenly flex-row"
      >
        <Image
          source={require("../img/stats.png")}
          className="w-20 h-16 rounded-lg"
        />
        <Text className="text-white text-xl font-bold px-2">Statistics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StatsCards;
