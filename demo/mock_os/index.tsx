import CalendarApp from "./calendar/calendar-app";
import GridSelect from "./grid-select";
import MessageApp from "./message-app";
import NavigationStack from "./navigation-stack/navigation-stack";
import { Render } from "lvgljs-ui";
import React from "react";

const apps: ((push: (app: JSX.Element, title?: string) => void) => {
  title: string;
  view: JSX.Element;
})[] = [
  (_) => ({ title: "messages", view: <MessageApp /> }),
  (push) => ({
    title: "calendar",
    view: <CalendarApp push={push} />,
  }),
];

Render.render(
  <NavigationStack root={(push) => <GridSelect push={push} apps={apps} />} />,
);
