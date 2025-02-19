import { ViewMetadata } from "..";
import CalendarEvent from "./CalendarEvent";
import WeekView, { organizeWeek } from "./WeekView";
import { getDateAfter, getDateBefore } from "./dateUtils";
import React, { useState } from "react";

const today = new Date();
const weekday = today.getDay();
const sunday = getDateBefore(today, weekday);

export enum CalendarView {
  Month,
  Week,
  Events,
}

const events: CalendarEvent[] = [{ date: new Date(), title: "Right now!" }];

interface CalendarViewProps {
  push: (app: ViewMetadata) => void;
}

export default function CalendarApp(props: CalendarViewProps) {
  return (
    <WeekView
      today={today}
      weekdays={organizeWeek(
        [...new Array(7)].map((_, i) => getDateAfter(sunday, i)),
        events,
      )}
      push={props.push}
    />
  );
}
