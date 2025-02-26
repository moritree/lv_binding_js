import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";

export default function NavigationStack(props: {
  root: (push: (app: JSX.Element, title?: string) => void) => JSX.Element;
}) {
  const push = (app: JSX.Element, title?: string) =>
    setStack((prevStack) => [...prevStack, { title: title, view: app }]);

  const [stack, setStack] = useState<{ title?: string; view: JSX.Element }[]>([
    { view: props.root(push) }, // build root view as base of stack
  ]);

  if (stack.length == 1) return stack.at(0)!.view;

  const top = stack.at(-1)!;
  return (
    <NavigationViewContainer
      view={top.view}
      title={top.title}
      back={() => setStack(stack.slice(0, -1))}
      topLevel={stack.length == 2}
    />
  );
}
