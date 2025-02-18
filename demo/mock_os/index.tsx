import AppContainer from "./AppContainer";
import CalendarApp from "./Calendar/CalendarApp";
import Home from "./Home";
import MessageApp from "./MessageApp";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

const apps = new Map<string, () => JSX.Element>([
  ["messages", () => <MessageApp />],
  ["calendar", () => <CalendarApp />],
]);

function Root() {
  const [active, setActive] = useState<string | null>(null);

  if (active)
    return (
      <AppContainer
        title={active}
        app={apps.get(active)?.()!}
        exit={() => setActive(null)}
      />
    );
  return <Home apps={apps} activate={(app) => setActive(app)} />;
}

Render.render(<Root />);
