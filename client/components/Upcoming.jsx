import { View, Text, ScrollView } from "react-native";
import React from "react";

const Upcoming = ({ classes }) => {
  return (
    <>
      {classes.length != 0 ? (
        <Text className="dark:text-blue-50 font-semibold text-lg underline">
          Upcoming classes of the day
        </Text>
      ) : null}
      <ScrollView
        className="mt-0.5"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {classes?.map((singleClass) => (
          <View key={singleClass.title} className="px-3 py-2 mx-2 bg-rose-600 rounded-lg">
            <Text className="text-white text-base font-bold">
              {singleClass.title}
            </Text>
            <Text className="text-white">{singleClass.time}</Text>
            <Text className="text-white">{singleClass.date}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Upcoming;
