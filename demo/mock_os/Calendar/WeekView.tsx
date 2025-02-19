import Colors from "../colors";
import { daysOfWeek, monthsOfYear } from "./dateUtils";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface WeekViewProps {
  today: Date;
  weekdays: Date[];
}

export default function WeekView(props: WeekViewProps) {
  return (
    <View style={style.root}>
      {props.weekdays.map((day, index) => {
        let viewStyle = style.day;
        let dateStyle = style.dateLabel;
        if (day.getDay() == props.today.getDay()) {
          viewStyle = { ...viewStyle, ...style.today };
          dateStyle = { ...dateStyle, ...style.today };
        }

        return (
          <View key={index} style={viewStyle}>
            <Text style={dateStyle}>
              {`${daysOfWeek[day.getDay()]} ${day.getDate()} ${
                monthsOfYear[day.getMonth()]
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
    overflow: "auto",
    "scroll-dir": "bottom",
    display: "flex",
    "flex-direction": "column",
    padding: "2px",
    "row-spacing": "2px",
  },
  day: {
    width: "100%",
    "background-color": Colors.light,
    "border-width": "1px",
    "border-radius": 0,
    "border-color": Colors.dark,
  },
  today: {
    "background-color": Colors.dark,
    "text-color": Colors.light,
  },
  dateLabel: {
    "text-color": Colors.dark,
  },
};
