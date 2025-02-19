import Colors from "../colors";
import CalendarEvent from "./CalendarEvent";
import { daysOfWeek, monthsOfYear } from "./dateUtils";
import { Text, View } from "lvgljs-ui";
import React from "react";

export function organizeWeek(weekdays: Date[], events: CalendarEvent[]) {
  // TODO: suuuuper slow lmao
  return weekdays.map((day) => ({
    date: day,
    events: events.filter(
      (event) => event.date.toDateString() == day.toDateString(),
    ),
  }));
}

interface WeekViewProps {
  today: Date;
  weekdays: WeekDay[];
}

interface WeekDay {
  date: Date;
  events: CalendarEvent[];
}

export default function WeekView(props: WeekViewProps) {
  return (
    <View style={style.root}>
      {props.weekdays.map((day, index) => {
        let viewStyle = style.day;
        let dateStyle = style.dateLabel;
        if (day.date.getDay() == props.today.getDay()) {
          viewStyle = { ...viewStyle, ...style.today };
          dateStyle = { ...dateStyle, ...style.today };
        }

        return (
          <View key={index} style={viewStyle}>
            <Text style={dateStyle}>
              {`${daysOfWeek[day.date.getDay()]} ${day.date.getDate()} ${
                monthsOfYear[day.date.getMonth()]
              }`}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const style = {
  root: {
    width: "100%",
    height: "100%",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    margin: 0,
    overflow: "auto",
    "scroll-dir": "bottom",
    display: "flex",
    "flex-direction": "column",
    padding: "2px",
    "row-spacing": "2px",
  },
  day: {
    width: "100%",
    height: "40px",
    overflow: "hidden",
    padding: "8px",
    "background-color": Colors.light,
    "border-width": "1px",
    "border-radius": 0,
    "border-color": Colors.dark,
    display: "flex",
    "justify-content": "space-between",
    "align-content": "center",
  },
  today: {
    "background-color": Colors.dark,
    "text-color": Colors.light,
  },
  dateLabel: {
    "text-color": Colors.dark,
    "font-size": "18px",
  },
  eventBox: {
    "background-color": Colors.highlight,
    "border-width": 0,
  },
};
