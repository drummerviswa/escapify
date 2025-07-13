import React, { useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import testIDs from "../testIDs";
import AgendaItem from "../components/AgendaItem";
import { getTheme, themeColor } from "../mock/theme";
import NavBar from "../components/NavBar";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

const leftArrowIcon = require("../img/previous.png");
const rightArrowIcon = require("../img/next.png");

function createAgendaItems(events) {
  return events.map((event) => ({
    title: event.date,
    data: event.times.map((time) => ({
      hour: time.hour,
      duration: time.duration,
      title: time.title,
      presence: time.presence,
      description: time.description,
    })),
  }));
}

export function getMarkedDates(agendaItems) {
  const marked = {};

  agendaItems.forEach((item) => {
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = { marked: true };
    } else {
      marked[item.title] = { disabled: true };
    }
  });

  return marked;
}

const events = [
  {
    date: "2024-07-16",
    times: [
      {
        hour: 1,
        duration: "45m",
        title: "Theory of Computation",
        description: "Dr.Sethuraman",
        presence: true,
      },
      {
        hour: 2,
        duration: "45m",
        title: "Database Management System",
        description: "Dr.George Washington",
        presence: true,
      },
      {
        hour: 4,
        duration: "45m",
        title: "Probability and Statistics",
        description: "Gunasundari",
        presence: true,
      },
    ],
  },
  {
    date: "2024-08-01",
    times: [
      {
        hour: "4pm",
        duration: "1h",
        title: "Pilates ABC",
        description: "temp",
        presence: false,
      },
      {
        hour: "5pm",
        duration: "1h",
        title: "Vinyasa Yoga",
        description: "temp",
        presence: true,
      },
    ],
  },
  {
    date: "2024-08-15",
    times: [
      {
        hour: "1pm",
        duration: "1h",
        title: "Ashtanga Yoga",
        description: "temp",
        presence: true,
      },
      {
        hour: "2pm",
        duration: "1h",
        title: "Deep Stretches",
        description: "temp",
        presence: true,
      },
      {
        hour: "3pm",
        duration: "1h",
        title: "Private Yoga",
        description: "temp",
        presence: false,
      },
    ],
  },
];

const agendaItems = createAgendaItems(events);
const markedDates = getMarkedDates(agendaItems);

const ExpandableCalendarScreen = ({ weekView }) => {
  const getDays = () => {
    return events.map((ind) => moment(ind.date).format("LLLL").split(",")[0]);
  };

  console.log("Days: ", getDays());
  const theme = useRef({
    ...getTheme(),
    backgroundColor: "white",
    calendarBackground: "white",
    textSectionTitleColor: "black",
    dayTextColor: "black",
    todayTextColor: themeColor,
    selectedDayTextColor: "white",
    monthTextColor: "black",
    indicatorColor: themeColor,
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    calendarHeight: 18,
    selectedDotColor: "white",
    dotColor: "crimson",
    dotStyle: {
      paddingVertical: 2,
    },
    textDisabledColor: "silver",
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

  const renderItem = useCallback(({ item }) => {
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
            markedDates={markedDates}
          />
        ) : (
          <ExpandableCalendar
            testID={testIDs.expandableCalendar.CONTAINER}
            calendarStyle={styles.calendar}
            theme={theme.current}
            markedDates={markedDates}
            leftArrowImageSource={leftArrowIcon}
            rightArrowImageSource={rightArrowIcon}
            animateScroll
          />
        )}
        <AgendaList
          sections={agendaItems}
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
