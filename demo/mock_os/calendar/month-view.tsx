import Colors from "../colors";
import {
  daysOfWeek,
  getDateAfter,
  getDateBefore,
  monthsOfYear,
} from "./date-utils";
import { Text, View } from "lvgljs-ui";
import React, { useState } from "react";

interface MonthViewProps {
  today: Date;
  push: (app: JSX.Element, title?: string) => void;
}

export default function MonthView(props: MonthViewProps) {
  const [firstDay] = useState(
    getDateBefore(props.today, props.today.getDate() - 1),
  );
  const [weekdayOfFirst] = useState(firstDay.getDay());
  const [daysInMonth] = useState(
    [...new Array(31)]
      .map((_, index) => getDateAfter(firstDay, index).getMonth())
      .findIndex((month) => month != props.today.getMonth()),
  );

  console.log("DAYS IN MONTH");
  console.log(daysInMonth);

  const gridDays = [...new Array(daysInMonth)].map((_, index) => {
    const gridPos = {
      "grid-row-pos": Math.floor((index + weekdayOfFirst) / 7),
      "grid-column-pos": (index + weekdayOfFirst) % 7,
    };
    return <View key={index} style={{ ...style.day, ...gridPos }} />;
  });

  return <View style={style.root}>{gridDays}</View>;
}

const style = {
  root: {
    width: "100%",
    height: "200px",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    "grid-template-rows": "1fr 1fr 1fr 1fr 1fr 1fr",
    "justify-content": "center", // justify/align required bc otherwise it's asymmetrical :( 7 doesn't fit in well
    "align-items": "center",
    padding: "4px",
    "row-spacing": "4px",
    "column-spacing": "4px",
  },
  day: {
    padding: 0,
    "border-radius": 0,
    "border-width": 1,
    "border-color": Colors.dark,
    "background-color": Colors.light,
    "grid-child": true,
    "justify-self": "stretch",
    "align-self": "stretch",
    display: "flex",
    "justify-content": "center",
    "align-content": "center",
  },
};
