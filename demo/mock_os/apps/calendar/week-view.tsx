import Colors from "../../colors";
import Style from "../../style";
import CalendarEvent from "./calendar-event";
import { daysOfWeek, monthsOfYear } from "./date-utils";
import EventsView from "./events-view";
import { Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
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
  push: (app: JSX.Element, title?: string) => void;
}

interface WeekDay {
  date: Date;
  events: CalendarEvent[];
}

export default function WeekView(props: WeekViewProps) {
  return (
    <View style={{ ...Style.root, ...{ "row-spacing": 4 } } as StyleProps}>
      {props.weekdays.map((day, index) => {
        let viewStyle = style.day;
        let dateStyle = style.dateLabel;
        if (day.date.getDay() == props.today.getDay()) {
          viewStyle = { ...viewStyle, ...style.today };
          dateStyle = { ...dateStyle, ...style.today };
        }

        return (
          <View
            key={index}
            style={viewStyle as StyleProps}
            onClick={() => {
              if (day.events.length)
                props.push(
                  <EventsView events={day.events} />,
                  `${daysOfWeek[day.date.getDay()].slice(
                    0,
                    3,
                  )} ${day.date.getDate()} ${monthsOfYear[
                    day.date.getMonth()
                  ].slice(0, 3)} ${day.date.getFullYear().toString().slice(2)}`,
                );
            }}
          >
            <Text style={dateStyle}>
              {`${daysOfWeek[day.date.getDay()]} ${day.date.getDate()} ${
                monthsOfYear[day.date.getMonth()]
              }`}
            </Text>
            {day.events.length ? (
              <View style={style.eventBox as StyleProps}>
                <Text style={{ "text-color": Colors.light }}>
                  {day.events.length}
                </Text>
              </View>
            ) : (
              <Text> </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const style = {
  day: {
    width: "100%",
    height: 40,
    overflow: "hidden",
    padding: 6,
    "background-color": Colors.light,
    "border-width": 1,
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
    "font-size": 18,
  },
  eventBox: {
    width: 28,
    height: 28,
    overflow: "hidden",
    "border-width": 0,
    "border-radius": 0,
    "background-color": Colors.highlight,
    display: "flex",
    "justify-content": "center",
    "align-content": "center",
  },
};
