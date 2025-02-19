import Home from "./Home";
import ViewContainer from "./ViewContainer";
import { Render } from "lvgljs-ui";
import React, { useState } from "react";

export interface ViewMetadata {
  title?: string;
  view: JSX.Element;
}

function Root(): JSX.Element {
  const [stack, setStack] = useState<ViewMetadata[]>([
    { view: <Home push={(app) => pushStack(app)} /> },
  ]);

  function pushStack(view: ViewMetadata): void {
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
