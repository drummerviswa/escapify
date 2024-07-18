import isEmpty from "lodash/isEmpty";
import React, { useCallback } from "react";
import { StyleSheet, Alert, View, Text, TouchableOpacity } from "react-native";
import testIDs from "../testIDs";

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const { item } = props;
  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (isEmpty(item)) {
    return (
      <View className="px-20 h-52 justify-center border-b-4 border-gray-400">
        <Text className="text-gray-500 text-sm">No Events Planned Today</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={itemPressed}
      testID={testIDs.agenda.ITEM}
      className="dark:bg-black py-5 px-3 rounded-b-sm border-gray-400 flex-row"
    >
      <View>
        <Text className="text-gray-600">{item.hour}</Text>
        <Text className="text-gray-600 text-xs mt-4 ml-4">{item.duration}</Text>
      </View>
      <View>
        <Text className="dark:text-white ml-5 font-bold text-base">
          {item.title}
        </Text>
        <Text className="dark:text-white ml-5 text-sm">
          {item.description}
        </Text>
      </View>
      <View className="flex-1 items-end justify-center">
        {item.presence === "Present" ? (
          <TouchableOpacity
            className="flex-1 items-end justify-center"
            style={{
              backgroundColor: "seagreen",
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white" }}>{item.presence}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={
              (styles.itemButtonContainer,
              {
                backgroundColor: "crimson",
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 8,
              })
            }
          >
            <Text style={{ color: "white" }}>{item.presence}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  emptyItemText: {
    color: "lightgrey",
    fontSize: 14,
  },
});
