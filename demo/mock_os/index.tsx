import CalendarApp from "./Calendar/calendar-app";
import GridSelect from "./grid-select";
import MessageApp from "./message-app";
import NavigationStack from "./navigation-stack/navigation-stack";
import { Render } from "lvgljs-ui";
import React from "react";

const apps: ((push: (app: JSX.Element, title?: string) => void) => {
  title: string;
  view: JSX.Element;
})[] = [
  (_) => ({ title: "Messages", view: <MessageApp /> }),
  (push) => ({
    title: "Calendar",
    view: <CalendarApp push={push} />,
  }),
];

Render.render(
  <NavigationStack
    root={(push) => <GridSelect push={push} options={apps} />}
  />,
);
