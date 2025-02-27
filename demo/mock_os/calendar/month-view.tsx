import Colors from "../colors";
import { daysOfWeek, monthsOfYear } from "./date-utils";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface MonthViewProps {
  today: Date;
  push: (app: JSX.Element, title?: string) => void;
}

export default function MonthView(props: MonthViewProps) {
  console.log("Got to month view!!");

  return (
    <View style={style.root}>
      {gridDays}
      {/* <Text
        style={{
          "grid-child": true,
          "grid-row-pos": 1,
          "grid-column-pos": 1,
          "background-color": Colors.dark,
        }}
      >
        Testing
      </Text> */}
    </View>
  );
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
    padding: "4px",
    "row-spacing": "2px",
    "column-spacing": "2px",
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

const gridDays = [...new Array(42)].map((_, index) => {
  const gridPos = {
    "grid-row-pos": Math.floor(index / 7),
    "grid-column-pos": index % 7,
  };
  return <View style={{ ...style.day, ...gridPos }} />;
});
