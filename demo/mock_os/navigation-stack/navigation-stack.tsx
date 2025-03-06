import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";

export default function NavigationStack(props: {
  root: (
    push: (app: JSX.Element, title?: string, getTitle?: () => string) => void,
  ) => JSX.Element;
}) {
  const push = (
    app: JSX.Element,
    title?: string,
    getTitle?: () => string,
    openNavBarApp?: string,
  ) => {
    setStack((prevStack) => [
      ...prevStack,
      {
        title: title,
        getTitle: getTitle,
        view: app,
        openNavBarApp: openNavBarApp,
      },
    ]);
  };
  const swap = (
    app: JSX.Element,
    title?: string,
    getTitle?: () => string,
    openNavBarApp?: string,
  ) =>
    setStack((prevStack) => [
      ...prevStack.slice(0, -1),
      {
        title: title,
        getTitle: getTitle,
        view: app,
        openNavBarApp: openNavBarApp,
      },
    ]);

  const [stack, setStack] = useState<
    {
      title?: string;
      getTitle?: () => string;
      view: JSX.Element;
      openNavBarApp?: string;
    }[]
  >([
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
