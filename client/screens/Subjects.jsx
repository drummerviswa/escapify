import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { useColorScheme } from "nativewind";
import SubjectBar from "../components/SubjectBar";

const Subjects = () => {
  const { colorScheme } = useColorScheme();
  const subject = [
    {
      Sub_ID: 1,
      Subject: "Data Structure",
      Credits: 4,
      Hours: 60,
    },
    {
      Sub_ID: 2,
      Subject: "Object Oriented Programming with C++",
      Credits: 4,
      Hours: 75,
    },
    {
      Sub_ID: 3,
      Subject: "Transforms and Partial Derivatives",
      Credits: 4,
      Hours: 60,
    },
    {
      Sub_ID: 4,
      Subject: "Computer Architecture",
      Credits: 4,
      Hours: 75,
    },
    {
      Sub_ID: 5,
      Subject: "C++ Lab",
      Credits: 2,
      Hours: 75,
    },
    {
      Sub_ID: 6,
      Subject: "DS Lab",
      Credits: 2,
      Hours: 75,
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 w-screen dark:bg-black justify-center items-center">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {subject?.map((item) => (
            <SubjectBar key={item.Sub_ID} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Subjects;
