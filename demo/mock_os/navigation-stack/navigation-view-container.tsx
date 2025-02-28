import BatteryApp from "../apps/battery/battery-app";
import BluetoothApp from "../apps/bluetooth/bluetooth-app";
import WifiApp from "../apps/wifi/wifi-app";
import Colors from "../colors";
import { BUILT_IN_SYMBOL, Button, Text, View } from "lvgljs-ui";
import React from "react";

export const NAV_BAR_HEIGHT = 24;
const NAV_BAR_APPS: { title: string; symbol: string; view: JSX.Element }[] = [
  {
    title: "Bluetooth",
    symbol: BUILT_IN_SYMBOL.bluetooth,
    view: <BluetoothApp />,
  },
  { title: "Wifi", symbol: BUILT_IN_SYMBOL.wifi, view: <WifiApp /> },
  { title: "Battery", symbol: BUILT_IN_SYMBOL.battery_2, view: <BatteryApp /> },
];

export default function NavigationViewContainer(props: {
  view: JSX.Element;
  title?: string;
  back: () => void;
  push: (app: JSX.Element, title?: string, openNavBarApp?: string) => void;
  swap: (app: JSX.Element, title?: string, openNavBarApp?: string) => void;
  topLevel: boolean;
  secondLevel: boolean;
  openNavBarApp?: string;
}) {
  return (
    <View style={style.root}>
      <View style={style.bar}>
        <View style={style.barSection}>
          <Button style={style.button} onClick={() => props.back()}>
            <Text>
              {props.topLevel
                ? BUILT_IN_SYMBOL.bars
                : props.secondLevel
                ? BUILT_IN_SYMBOL.close
                : BUILT_IN_SYMBOL.left}
            </Text>
          </Button>
          <Text style={style.title}>
            {new Date()
              .toLocaleTimeString()
              .split(":")
              .slice(0, 2)
              .join(":")
              .replace(/^0/, "")}
          </Text>
        </View>

        <View style={{ ...style.barSection, "justify-content": "center" }}>
          <Text style={style.title}>{props.title || "ZuniBax OS"}</Text>
        </View>

        <View style={{ ...style.barSection, "justify-content": "flex-end" }}>
          {NAV_BAR_APPS.map((app) => (
            <Button
              style={style.button}
              onClick={() => {
                if (!props.openNavBarApp)
                  props.push(app.view, app.title, app.title);
                else if (props.openNavBarApp == app.title) props.back();
                else props.swap(app.view, app.title, app.title);
              }}
            >
              <Text>{app.symbol}</Text>
            </Button>
          ))}
        </View>
      </View>
      {props.view}
    </View>
  );
}

const style = {
  root: {
    width: "320px",
    height: "240px",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    display: "flex",
    "flex-direction": "column",
    "row-spacing": 0,
    padding: 0,
  },
  bar: {
    width: "100%",
    height: NAV_BAR_HEIGHT + "px",
    "background-color": Colors.dark,
    padding: "2px",
    "border-radius": 0,
    "border-width": 0,
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
  },
  barSection: {
    "padding-left": 0,
    "padding-right": "2px",
    "padding-top": 0,
    "padding-bottom": 0,
    width: "33%",
    height: "auto",
    "border-width": 0,
    "border-radius": 0,
    "background-color": Colors.dark,
    display: "flex",
    "flex-direction": "row",
    "justify-content": "flex-start",
    "column-spacing": "2px",
  },
  title: {
    "padding-top": "2px",
    "font-size": "14px",
    "text-color": Colors.light,
    width: "fit-content",
    "text-align": "center",
  },
  button: {
    "background-color": Colors.dark,
    height: "20px",
    width: "20px",
    "shadow-opacity": 0.0,
    "flex-grow": 0,
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
};
