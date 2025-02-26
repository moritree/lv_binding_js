import Home from "./Home";
import ViewContainer from "./view-container";
import React, { useState } from "react";

export interface NavigationMetadata {
  title?: string;
  view: JSX.Element;
}

// interface NavigationProps {
//   rootView: NavigationMetadata;

// }

export default function NavigationStack(): JSX.Element {
  const [stack, setStack] = useState<NavigationMetadata[]>([
    { view: <Home push={(app) => pushStack(app)} /> },
  ]);

  function pushStack(view: NavigationMetadata): void {
    setStack((prevStack) => [...prevStack, view]);
  }

  if (stack.length == 1) return stack.at(0)!.view;
  return (
    <ViewContainer
      meta={stack.at(-1)!}
      back={() => setStack(stack.slice(0, -1))}
      topLevel={stack.length == 2}
    />
  );
}
