import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";
import BluetoothApp from "../bluetooth-app";

export default function NavigationStack(props: {
  root: (push: (app: JSX.Element, title?: string) => void) => JSX.Element;
}) {
  const push = (app: JSX.Element, title?: string) =>
    setStack((prevStack) => [...prevStack, { title: title, view: app }]);

  const [stack, setStack] = useState<{ title?: string; view: JSX.Element }[]>([
    { view: props.root(push) }, // build root view as base of stack
  ]);

  const current = stack.at(-1)!;
  const isBluetoothOpen = React.isValidElement(current.view) && current.view.type === BluetoothApp;

  return (
    <NavigationViewContainer
      view={current.view}
      title={current.title}
      back={() => stack.length > 1 && setStack(stack.slice(0, -1))}
      topLevel={stack.length <= 1}
      secondLevel={stack.length <= 2}
      onBluetoothClick={isBluetoothOpen ? undefined : () => push(<BluetoothApp />, "Bluetooth")}
    />
  );
}
