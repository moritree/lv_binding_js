import Colors from "../../colors";
import { NAV_BAR_HEIGHT } from "../../navigation-stack/navigation-view-container";
import CalendarEvent from "./calendar-event";
import { getDateAfter, getDateBefore } from "./date-utils";
import EventsView from "./events-view";
import { View } from "lvgljs-ui";
import React from "react";

interface MonthViewProps {
  today: Date;
  push: (app: JSX.Element, title?: string) => void;
  events: CalendarEvent[];
}

export default function MonthView(props: MonthViewProps) {
  // TODO: are these being computed way too often? do I need to use state instead?
  const firstDay = getDateBefore(props.today, props.today.getDate() - 1);
  const weekdayOfFirst = firstDay.getDay();
  const daysInMonth = [...new Array(32)]
    .map((_, index) => getDateAfter(firstDay, index).getMonth())
    .findIndex((month) => month != props.today.getMonth());

  return (
    <View style={style.root}>
      {[...new Array(daysInMonth)].map((_, index) => (
        <View
          key={index}
          style={{
            ...style.day,
            ...{
              "grid-row-pos": Math.floor((index + weekdayOfFirst) / 7),
              "grid-column-pos": (index + weekdayOfFirst) % 7,
            },
            ...{
              "background-color": props.events.find(
                (e) => e.date.getDate() == index + 1,
              )
                ? Colors.highlight
                : style.root["background-color"],
            },
          }}
          onClick={() => {
            props.push(
              <EventsView
                events={props.events.filter(
                  (e) => e.date.getDate() == index + 1,
                )}
              />,
              "on this day...",
            );
          }}
        />
      ))}
    </View>
  );
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
