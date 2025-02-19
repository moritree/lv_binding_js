import AppContainer from "./AppContainer";
import CalendarApp from "./Calendar/CalendarApp";
import Home from "./Home";
import MessageApp from "./MessageApp";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

function Root() {
  const apps = new Map<string, () => JSX.Element>([
    ["messages", () => <MessageApp />],
    ["calendar", () => <CalendarApp push={(view) => pushStack(view)} />],
  ]);

  const [stack, setStack] = useState<JSX.Element[]>([
    <Home
      apps={apps}
      activate={(app) => {
        pushStack(apps.get(app)?.()!);
      }}
    />,
  ]);

  function pushStack(view: JSX.Element): void {
    setStack((prevStack) => [...prevStack, view]);
  }

  if (stack.length == 1) return stack.at(0)!;
  return (
    <AppContainer
      title={"Test"}
      app={stack.at(-1)!}
      exit={() => setStack(stack.slice(0, -1))}
      push={(view) => pushStack(view)}
    />
  );
}

Render.render(<Root />);
