import NavigationViewContainer from "./navigation-view-container";
import React, { useState } from "react";
import BluetoothApp from "../bluetooth-app";
import WiFiApp from "../wifi-app";
import BatteryApp from "../battery-app";

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
  const isWiFiOpen = React.isValidElement(current.view) && current.view.type === WiFiApp;
  const isBatteryOpen = React.isValidElement(current.view) && current.view.type === BatteryApp;
  const isSystemAppOpen = isBluetoothOpen || isWiFiOpen || isBatteryOpen;

  const back = () => stack.length > 1 && setStack(stack.slice(0, -1));

  const handleSystemAppClick = (app: JSX.Element, title: string) => {
    if (isSystemAppOpen) {
      back();
    }
    push(app, title);
  };

  return (
    <NavigationViewContainer
      view={current.view}
      title={current.title}
      back={back}
      topLevel={stack.length <= 1}
      secondLevel={stack.length <= 2}
      onBluetoothClick={isBluetoothOpen ? undefined : () => handleSystemAppClick(<BluetoothApp />, "Bluetooth")}
      onWiFiClick={isWiFiOpen ? undefined : () => handleSystemAppClick(<WiFiApp />, "WiFi")}
      onBatteryClick={isBatteryOpen ? undefined : () => handleSystemAppClick(<BatteryApp />, "Battery")}
    />
  );
}
