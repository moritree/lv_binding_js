import Colors from "../../colors";
import CalendarEvent from "./calendar-event";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface EventsViewProps {
  events: CalendarEvent[];
}

export default function EventsView(props: EventsViewProps) {
  return (
    <View style={style.root}>
      {props.events.map((event) => (
        <View style={style.event}>
          <View style={style.eventHeader}>
            <Text style={style.text}>{event.date.toTimeString()}</Text>
            <Text style={style.text}>{event.title}</Text>
          </View>
          {event.description && (
            <Text style={style.eventDescription}>{event.description}</Text>
          )}
        </View>
      ))}
    </View>
  );
}

const style = {
  root: {
    width: "100%",
    height: "100%",
    padding: "2px",
    margin: 0,
    overflow: "auto",
    display: "flex",
    "flex-direction": "column",
    "flex-grow": 1,
    "row-spacing": "2px",
    "scroll-dir": "bottom",
    "border-radius": 0,
    "border-width": 0,
    "background-color": Colors.light,
  },
  event: {
    width: "100%",
    height: "auto",
    padding: "6px",
    "background-color": Colors.light,
    "border-width": "1px",
    "border-radius": 0,
    "border-color": Colors.dark,
    display: "flex",
    "flex-direction": "column",
  },
  eventHeader: {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    padding: 0,
    margin: 0,
    "background-color": Colors.light,
    "border-width": 0,
    "border-radius": 0,
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-content": "center",
  },
  text: {
    "text-color": Colors.dark,
  },
  eventDescription: {
    width: "100%",
    height: "auto",
    "background-color": Colors.dark,
    "font-size": 12,
  },
};
