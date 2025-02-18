import WeekView from "./WeekView";
import { getDateAfter, getDateBefore } from "./dateUtils";
import React, { useState } from "react";

const today = new Date();
const weekday = today.getDay();
const sunday = getDateBefore(today, weekday);

enum CalendarView {
  Month,
  Week,
}

export default function CalendarApp() {
  const [view, setView] = useState<CalendarView>(CalendarView.Week);

  return (
    <WeekView
      today={today}
      weekdays={[...new Array(7)].map((_, i) => getDateAfter(sunday, i))}
    />
  );
}

const style = {
  calendar: {
    width: 285,
    height: 285,
  },
};
