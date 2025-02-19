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
  push: (app: JSX.Element) => void;
}

export default function CalendarApp(props: CalendarViewProps) {
  const [view, setView] = useState<CalendarView>(CalendarView.Week);

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
