import Colors from "../colors";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface WeekViewProps {
  today: Date;
  weekdays: Date[];
}

export default function WeekView(props: WeekViewProps) {
  return (
    <View style={style.root}>
      {props.weekdays.map((day) => {
        return <Text>{day.toString()}</Text>;
      })}
    </View>
  );
}

const style = {
  root: {
    width: "320px",
    height: "240px",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    display: "flex",
    "flex-direction": "column",
  },
};
