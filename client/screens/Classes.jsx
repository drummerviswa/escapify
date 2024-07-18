import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { useColorScheme } from "nativewind";
import { Agenda } from "react-native-calendars";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";
const Classes = () => {
  const { colorScheme } = useColorScheme();
  const currentDate = new Date();
  return (
    <>
      <View className={colorScheme == "dark" ? "bg-black " : ""}>
        <NavBar />
      </View>
      <GestureHandlerRootView>
        <NativeViewGestureHandler className="h-[80%]">
          <Agenda
            items={{
              "2024-07-14": [{ name: "Calculus", data: "Done", time: "2.30" }],
              "2024-07-14": [{ name: "Calculus", data: "Done", time: "11.30" }],
              "2024-07-14": [{ name: "Calculus", data: "Done", time: "12.30" }],
              "2024-07-14": [{ name: "Calculus", data: "Done", time: "3.30" }],
            }}
            renderEmptyDate={() => {
              return <View />;
            }}
            onRefresh={() => console.log("refreshing...")}
            renderEmptyData={() => {
              return (
                <View className="h-[100%] flex justify-center items-center dark:bg-black">
                  <Text className="text-center text-2xl dark:text-white">
                    No classes 😊
                  </Text>
                </View>
              );
            }}
            renderItem={(item, isFirst) => (
              <TouchableOpacity className="bg-blue-500 flex-1 rounded-md p-0.5">
                <Text className="text-black text-lg">{item.name}</Text>
                <Text className="text-black text-lg">{item.data}</Text>
                <Text className="text-black text-sm">{item.time}</Text>
              </TouchableOpacity>
            )}
            selected={currentDate}
            theme={{
              calendarBackground: "#e4e4e4",
              agendaKnobColor: "crimson",
            }}
          />
        </NativeViewGestureHandler>
      </GestureHandlerRootView>
    </>
  );
};

export default Classes;
