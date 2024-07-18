import React, { useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import testIDs from "../testIDs";
import { agendaItems, getMarkedDates } from "../mock/agendaItems";
import AgendaItem from "../mock/AgendaItem";
import { getTheme, themeColor, lightThemeColor } from "../mock/theme";
import NavBar from "../components/NavBar";
import { useColorScheme } from "nativewind";

const leftArrowIcon = require("../img/previous.png");
const rightArrowIcon = require("../img/next.png");
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const ExpandableCalendarScreen = (props: Props) => {
  const { weekView } = props;
  const { colorScheme } = useColorScheme();
  const theme = useRef({
    ...getTheme(),
    backgroundColor: "white",
    calendarBackground: "white",
    textSectionTitleColor: "black",
    dayTextColor: "black",
    todayTextColor: themeColor,
    selectedDayTextColor: "white",
    monthTextColor: "black",
    indicatorColor: "black",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    calendarHeight: 18,
  });
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const onDateChanged = useCallback((date, updateSource) => {
    console.log("ExpandableCalendarScreen onDateChanged: ", date, updateSource);
  }, []);

  const onMonthChange = useCallback(({ dateString }) => {
    console.log("ExpandableCalendarScreen onMonthChange: ", dateString);
  }, []);

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <View className="dark:bg-black">
        <NavBar />
      </View>
      <CalendarProvider
        date={today}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
        theme={todayBtnTheme.current}
        todayBottomMargin={16}
      >
        {weekView ? (
          <WeekCalendar
            testID={testIDs.weekCalendar.CONTAINER}
            theme={theme.current}
          />
        ) : (
          <ExpandableCalendar
            testID={testIDs.expandableCalendar.CONTAINER}
            calendarStyle={styles.calendar}
            theme={theme.current}
            leftArrowImageSource={leftArrowIcon}
            rightArrowImageSource={rightArrowIcon}
            animateScroll
          />
        )}
        <AgendaList
          sections={ITEMS}
          renderItem={renderItem}
          markToday
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  header: {
    backgroundColor: themeColor,
    color: "white",
  },
  section: {
    backgroundColor: themeColor,
    color: "white",
    textTransform: "capitalize",
    fontSize: 16,
    paddingBottom: 12,
  },
});
