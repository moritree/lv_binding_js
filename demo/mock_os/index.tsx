import CalendarApp from "./apps/calendar/calendar-app";
import MessageApp from "./apps/messages/message-app";
import GridSelect from "./components/grid-select";
import NavigationStack from "./navigation-stack/navigation-stack";
import { Render } from "lvgljs-ui";
import React from "react";

const APPS: ((
  push: (app: JSX.Element, title?: string, getTitle?: () => string) => void,
) => {
  title: string;
  view: JSX.Element;
})[] = [
  (_) => ({ title: "Messages", view: <MessageApp /> }),
  (push) => ({ title: "Calendar", view: <CalendarApp push={push} /> }),
];

Render.render(
  <NavigationStack
    root={(push) => <GridSelect push={push} options={APPS} />}
  />,
);
