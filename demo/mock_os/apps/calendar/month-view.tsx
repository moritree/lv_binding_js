import Colors from "../../colors";
import BlackButton from "../../components/black-button";
import { NAV_BAR_HEIGHT } from "../../navigation-stack/navigation-view-container";
import Style from "../../style";
import CalendarEvent from "./calendar-event";
import {
  daysOfWeek,
  getDateAfter,
  getDateBefore,
  monthsOfYear,
  sameDate,
} from "./date-utils";
import EventsView from "./events-view";
import { BUILT_IN_SYMBOL, Button, Text, View } from "lvgljs-ui";
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
    <View
      style={{
        ...Style.root,
        ...{
          "flex-direction": "row",
          overflow: "hidden",
          padding: "0",
          "column-spacing": 0,
        },
      }}
    >
      <View style={style.gridRoot}>
        {[...new Array(daysInMonth)].map((_, index) => {
          const day = getDateAfter(firstDay, index);
          return (
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
                    : style.gridRoot["background-color"],
                },
              }}
              onClick={() => {
                props.push(
                  <EventsView
                    events={props.events.filter((e) => sameDate(e.date, day))}
                  />,
                  `${daysOfWeek[day.getDay()].slice(
                    0,
                    3,
                  )} ${day.getDate()} ${monthsOfYear[day.getMonth()].slice(
                    0,
                    3,
                  )} ${day.getFullYear().toString().slice(2)}`,
                );
              }}
            />
          );
        })}
      </View>
      <View style={style.sidebar}>
        <Button style={style.button} onPressedStyle={style.pressed}>
          <Text style={{ "text-color": Colors.light }}>
            {BUILT_IN_SYMBOL.up}
          </Text>
        </Button>
        <Button style={style.button} onPressedStyle={style.pressed}>
          <Text style={{ "text-color": Colors.light }}>
            {BUILT_IN_SYMBOL.down}
          </Text>
        </Button>
      </View>
    </View>
  );
}

const style = {
  gridRoot: {
    width: 320 - NAV_BAR_HEIGHT + "px",
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
  sidebar: {
    ...Style.root,
    ...{
      width: "100%",
      height: "100%",
      "background-color": Colors.light,
      overflow: "hidden",
      padding: "4px 4px 4px 2px",
      "justify-content": "center",
      "align-content": "center",
      "row-spacing": "4px",
    },
  },
  button: {
    display: "flex",
    width: "100%",
    "flex-direction": "row",
    "justify-content": "center",
    "background-color": Colors.dark,
    "border-radius": 0,
    "border-width": 0,
    padding: "4px",
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
    "shadow-opacity": 0,
    "flex-grow": 1,
    "align-content": "center",
  },
  pressed: {
    "background-color": Colors.highlight,
    "border-radius": 0,
    padding: "2px",
    "border-width": "2px",
    "border-color": Colors.dark,
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
  },
};
