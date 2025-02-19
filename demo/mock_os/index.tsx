import CalendarApp from "./Calendar/CalendarApp";
import Home from "./Home";
import MessageApp from "./MessageApp";
import ViewContainer from "./ViewContainer";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

export interface ViewMetadata {
  title?: string;
  view: JSX.Element;
}

function Root(): JSX.Element {
  const apps: ViewMetadata[] = [
    { title: "messages", view: <MessageApp /> },
    {
      title: "calendar",
      view: <CalendarApp push={(view) => pushStack(view)} />,
    },
  ];

  const [stack, setStack] = useState<ViewMetadata[]>([
    { view: <Home apps={apps} push={(app) => pushStack(app)} /> },
  ]);

  function pushStack(view: ViewMetadata): void {
    // console.log("PUSHING " + (view.title || "untitled"));
    setStack((prevStack) => [...prevStack, view]);
  }

  if (stack.length == 1) return stack.at(0)!.view;
  return (
    <ViewContainer
      meta={stack.at(-1)!}
      exit={() => setStack(stack.slice(0, -1))}
    />
  );
}

Render.render(<Root />);
