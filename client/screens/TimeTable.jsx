import { useColorScheme } from "nativewind";
import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import NavBar from "../components/NavBar";

const periodTimes = {
  1: { start: { hour: 8, minute: 30 }, end: { hour: 9, minute: 20 } },
  2: { start: { hour: 9, minute: 20 }, end: { hour: 10, minute: 10 } },
  3: { start: { hour: 10, minute: 20 }, end: { hour: 11, minute: 15 } },
  4: { start: { hour: 11, minute: 15 }, end: { hour: 12, minute: 0 } },
  5: { start: { hour: 13, minute: 10 }, end: { hour: 14, minute: 5 } },
  6: { start: { hour: 14, minute: 5 }, end: { hour: 14, minute: 50 } },
  7: { start: { hour: 14, minute: 50 }, end: { hour: 15, minute: 40 } },
  8: { start: { hour: 15, minute: 40 }, end: { hour: 16, minute: 15 } },
};

const getTimeBlocks = (daysPeriods, numHours = 1) => {
  return daysPeriods.map(({ day, period }) => {
    const start = periodTimes[period].start;
    let end = periodTimes[period + numHours - 1].end;

    if (period === 2 && numHours >= 3) {
      end = { hour: 11, minute: 15 };
    } else if (period === 5 && numHours >= 3) {
      end = { hour: 14, minute: 50 };
    }

    return {
      startTime: genTimeBlock(day, start.hour, start.minute),
      endTime: genTimeBlock(day, end.hour, end.minute),
    };
  });
};

const classHours = [
  {
    title: "English",
    timeBlocks: getTimeBlocks([
      { day: "MON", period: 3 },
      { day: "FRI", period: 3 },
      { day: "FRI", period: 4 },
    ]),
    location: "LH 5",
    staff: "Dr. Kalyani Pricilla",
  },
  {
    title: "M2",
    timeBlocks: getTimeBlocks([
      { day: "MON", period: 4 },
      { day: "TUE", period: 3 },
      { day: "TUE", period: 4 },
      { day: "FRI", period: 2 },
    ]),
    location: "LH 5",
    staff: "Dr. Subashini",
  },
  {
    title: "Chemistry",
    timeBlocks: getTimeBlocks([
      { day: "WED", period: 3 },
      { day: "WED", period: 4 },
      { day: "THU", period: 5 },
      { day: "THU", period: 6 },
    ]),
    location: "LH 5",
    staff: "Baskaranlingam",
  },
  {
    title: "C++",
    timeBlocks: getTimeBlocks([
      { day: "MON", period: 5 },
      { day: "TUE", period: 1 },
      { day: "TUE", period: 2 },
      { day: "WED", period: 5 },
      { day: "WED", period: 6 },
    ]),
    location: "LH 5",
    staff: "Dr. Anbuchellian",
  },
  {
    title: "DS",
    timeBlocks: getTimeBlocks([
      { day: "MON", period: 1 },
      { day: "MON", period: 2 },
      { day: "FRI", period: 5 },
    ]),
    location: "LH 5",
    staff: "Sivashankari mam",
  },
  {
    title: "CA",
    timeBlocks: getTimeBlocks([
      { day: "WED", period: 1 },
      { day: "WED", period: 2 },
      { day: "FRI", period: 1 },
    ]),
    location: "LH 5",
    staff: "KSB",
  },
  {
    title: "DS Lab",
    timeBlocks: getTimeBlocks([{ day: "THU", period: 1 }], 4),
    location: "LH 5",
    staff: "Sivashankari mam",
  },
  {
    title: "DS Lab",
    timeBlocks: getTimeBlocks([{ day: "SAT", period: 1 }], 4),
    location: "LH 5",
    staff: "Sivashankari mam",
    cutted: true,
  },
];

const expandedClassHours = classHours.flatMap((classHour) =>
  classHour.timeBlocks.map((timeBlock) => ({
    title: classHour.title,
    startTime: timeBlock.startTime,
    endTime: timeBlock.endTime,
    location: classHour.location,
    staff: classHour.staff,
  }))
);

const TimeTable = () => {
  const numOfDays = 6;
  const pivotDate = genTimeBlock("mon");
  const timetableRef = useRef(null);

  const onEventPress = (evt) => {
    Alert.alert("Staff Name", evt.staff);
  };
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1">
      <View className={colorScheme == "dark" ? "bg-black " : ""}>
        <NavBar />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 dark:bg-black pt-0.5">
          <TimeTableView
            scrollViewRef={(ref) => (timetableRef.current = ref)}
            events={expandedClassHours}
            pivotTime={8}
            pivotEndTime={18}
            pivotDate={pivotDate}
            nDays={numOfDays}
            onEventPress={onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en"
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "crimson",
  },
});

export default TimeTable;
