import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";

interface StackItem {
  view: JSX.Element;
  title?: string;
  getTitle?: () => string;
  openNavBarApp?: string;
}

interface NavigationStackProps {
  root: (
    push: (
      view: JSX.Element,
      title?: string,
      getTitle?: () => string,
      openNavBarApp?: string,
    ) => void,
  ) => JSX.Element;
}

export default function NavigationStack(props: NavigationStackProps) {
  const push = (
    view: JSX.Element,
    title?: string,
    getTitle?: () => string,
    openNavBarApp?: string,
  ) => {
    setStack((prevStack) => [
      ...prevStack,
      {
        view,
        title,
        getTitle,
        openNavBarApp,
      },
    ]);
  };
  const swap = (
    view: JSX.Element,
    title?: string,
    getTitle?: () => string,
    openNavBarApp?: string,
  ) =>
    setStack((prevStack) => [
      ...prevStack.slice(0, -1),
      {
        view,
        title,
        getTitle,
        openNavBarApp,
      },
    ]);

  const [stack, setStack] = useState<StackItem[]>([
    { view: props.root(push) }, // build root view as base of stack
  ]);
  const current = stack.at(-1)!;
  const back = () => stack.length > 1 && setStack(stack.slice(0, -1));

  return (
    <NavigationViewContainer
      view={current.view}
      title={current.title}
      getTitle={current.getTitle}
      back={back}
      topLevel={stack.length <= 1}
      secondLevel={stack.length <= 2}
      push={push}
      swap={swap}
      openNavBarApp={current.openNavBarApp}
    />
  );
}
