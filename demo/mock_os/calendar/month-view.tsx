import Colors from "../colors";
import { NAV_BAR_HEIGHT } from "../navigation-stack/navigation-view-container";
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
  // TODO: are these being computed way too often? do I need to use state instead?
  const firstDay = getDateBefore(props.today, props.today.getDate() - 1);
  const weekdayOfFirst = firstDay.getDay();
  const daysInMonth = [...new Array(31)]
    .map((_, index) => getDateAfter(firstDay, index).getMonth())
    .findIndex((month) => month != props.today.getMonth());
  const gridDays = [...new Array(daysInMonth)].map((_, index) => (
    <View
      key={index}
      style={{
        ...style.day,
        ...{
          "grid-row-pos": Math.floor((index + weekdayOfFirst) / 7),
          "grid-column-pos": (index + weekdayOfFirst) % 7,
        },
      }}
    />
  ));

  return <View style={style.root}>{gridDays}</View>;
}

const style = {
  root: {
    width: "100%",
    height: 240 - NAV_BAR_HEIGHT + "px",
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
