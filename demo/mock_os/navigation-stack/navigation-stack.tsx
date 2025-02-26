import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";

interface NavigationStackProps {
  root: (push: (app: JSX.Element, title?: string) => void) => JSX.Element;
}

export default function NavigationStack(props: NavigationStackProps) {
  const [stack, setStack] = useState<{ title?: string; view: JSX.Element }[]>([
    {
      view: props.root((app: JSX.Element, title?: string) =>
        setStack((prevStack) => [...prevStack, { title: title, view: app }]),
      ),
    },
  ]);

  if (stack.length == 1) return stack.at(0)!.view;
  return (
    <NavigationViewContainer
      view={stack.at(-1)!.view}
      title={stack.at(-1)!.title}
      back={() => setStack(stack.slice(0, -1))}
      topLevel={stack.length == 2}
    />
  );
}
