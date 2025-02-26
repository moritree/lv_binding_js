import CalendarEvent from "./calendar-event";
import { getDateAfter, getDateBefore } from "./date-utils";
import WeekView, { organizeWeek } from "./week-view";
import React from "react";

const today = new Date();
const weekday = today.getDay();
const sunday = getDateBefore(today, weekday);

const events: CalendarEvent[] = [
  { date: new Date(), title: "Right now!" },
  {
    date: new Date(),
    title: "Right now also",
    description:
      "But this one also has a description. A longer description, which forces line wrap.",
  },
  { date: getDateBefore(new Date(), 3), title: "3 days ago" },
];

export default function CalendarApp(props: {
  push: (app: JSX.Element, title?: string) => void;
}) {
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
