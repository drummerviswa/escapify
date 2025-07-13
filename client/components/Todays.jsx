import { View, Text, ScrollView } from "react-native";
import React from "react";

const Todays = ({ classes }) => {
  return (
    <>
      {classes.length != 0 ? (
        <Text className="dark:text-blue-50 font-semibold text-lg underline">
          Today's Classes
        </Text>
      ) : null}
      <ScrollView className="mt-0.5" showsVerticalScrollIndicator={false}>
        {classes?.map((singleClass) => (
          <View key={singleClass.title} className="flex-1 flex-row">
            <View className="px-3 py-2 my-2 bg-rose-600 rounded-lg w-3/4">
              <Text className="text-white text-base font-bold">
                {singleClass.title}
              </Text>
              <Text className="text-white">{singleClass.time}</Text>
              <Text className="text-white">{singleClass.date}</Text>
            </View>
            <View className="w-1/4 flex-1 justify-evenly items-center flex-row">
              <View className="px-2 py-1 bg-green-500 rounded-lg">
                <Text className="text-white">Yes</Text>
              </View>
              <View className="p-2 bg-red-400 rounded-lg">
                <Text className="text-white">No</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Todays;
