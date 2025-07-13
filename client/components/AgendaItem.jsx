import isEmpty from "lodash/isEmpty";
import React, { useCallback, useState } from "react";
import { StyleSheet, Alert, View, Text, TouchableOpacity } from "react-native";
import testIDs from "../testIDs";

const AgendaItem = ({ item }) => {
  const [date, setDate] = useState({
    hour: item.hour,
    duration: item.duration,
    title: item.title,
    description: item.description,
    presence: item.presence,
  });
  const togglePresence = useCallback(() => {
    setDate((prevDate) => ({
      ...prevDate,
      presence: !prevDate.presence,
    }));
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(
      item.title,
      `Do you want to change the attendance ${item.title} of ${date.hour} ?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: togglePresence,
        },
      ],
      { cancelable: true }
    );
  }, [item, togglePresence]);

  if (isEmpty(item)) {
    return (
      <View className="px-20 h-52 justify-center border-b-4 border-gray-400">
        <Text className="text-gray-500 text-sm">No Events Planned Today</Text>
      </View>
    );
  }
  return (
    <View
      testID={testIDs.agenda.ITEM}
      className="dark:bg-black py-5 px-3 rounded-b-sm border-gray-400 flex-row"
    >
      <View>
        <Text className="text-gray-500 text-center text-lg font-bold pb-1">{date.hour}</Text>
        <Text className="text-gray-600 text-xs">{date.duration}</Text>
      </View>
      <View>
        <Text className="dark:text-white ml-5 font-bold text-base">
          {date.title}
        </Text>
        <Text className="dark:text-white ml-5 text-sm">{date.description}</Text>
      </View>
      <View className="flex-1 items-end justify-center">
        <TouchableOpacity
        activeOpacity={.7}
          className="flex-1 items-end justify-center"
          onPress={itemPressed}
          style={{
            backgroundColor: date.presence ? "seagreen" : "crimson",
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white" }}>
            {date.presence ? "Present" : "Absent"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(AgendaItem);