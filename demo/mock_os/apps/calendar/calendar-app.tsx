import GridSelect from "../../components/grid-select";
import CalendarEvent from "./calendar-event";
import { getDateAfter, getDateBefore, monthsOfYear } from "./date-utils";
import MonthView from "./month-view";
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

const VIEWS: ((push: (app: JSX.Element, title?: string) => void) => {
  title: string;
  view: JSX.Element;
})[] = [
  (push) => ({
    title: "week view",
    view: (
      <WeekView
        today={today}
        weekdays={organizeWeek(
          [...new Array(7)].map((_, i) => getDateAfter(sunday, i)),
          events,
        )}
        push={push}
      />
    ),
  }),
  (push) => ({
    buttonTitle: "month view",
    title:
      monthsOfYear[today.getMonth()].slice(0, 3) + " " + today.getFullYear(),
    view: <MonthView today={today} push={push} events={events} />,
  }),
];

export default function CalendarApp(props: {
  push: (app: JSX.Element, title?: string) => void;
}) {
  return <GridSelect push={props.push} options={VIEWS} />;
}
