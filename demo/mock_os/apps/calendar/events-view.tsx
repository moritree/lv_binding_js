import Colors from "../../colors";
import ShadowButton from "../../components/shadow-button";
import { NAV_BAR_HEIGHT } from "../../navigation-stack/navigation-view-container";
import Style from "../../style";
import CalendarEvent from "./calendar-event";
import { roundToNearestMinute, twelveHourTime } from "./date-utils";
import { BUILT_IN_SYMBOL, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

interface EventsViewProps {
  events: CalendarEvent[];
}

export default function EventsView(props: EventsViewProps) {
  return (
    <View
      style={
        { ...Style.root, ...{ overflow: "hidden", padding: 0 } } as StyleProps
      }
    >
      <View
        style={
          {
            ...Style.root,
            ...{ "row-spacing": 4, height: 240 - NAV_BAR_HEIGHT * 2 },
          } as StyleProps
        }
      >
        {props.events.map((event) => {
          const rounded = roundToNearestMinute(event.date);
          return (
            <View style={style.event as StyleProps}>
              <View style={style.eventHeader as StyleProps}>
                <Text style={style.text}>{twelveHourTime(rounded)}</Text>
                <Text style={style.text}>{event.title}</Text>
              </View>
              {event.description && (
                <Text style={style.eventDescription as StyleProps}>
                  {event.description}
                </Text>
              )}
            </View>
          );
        })}
      </View>
      <View style={style.buttonContainer as StyleProps}>
        <ShadowButton
          text={BUILT_IN_SYMBOL.plus}
          onClick={() => console.log("Click")}
          style={{ width: "30px", height: "30px" }}
        />
      </View>
    </View>
  );
}

const style = {
  event: {
    width: "100%",
    height: "auto",
    padding: 6,
    "background-color": Colors.light,
    "border-width": 1,
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
  buttonContainer: {
    width: "100%",
    height: NAV_BAR_HEIGHT,
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-content": "center",
    overflow: "hidden",
  },
};
