import TopBar from "./TopBar";
import Colors from "./colors";
import { View } from "lvgljs-ui";
import React from "react";

interface AppContainerProps {
  title: string;
  app: JSX.Element;
  exit: () => void;
  push: (app: JSX.Element) => void;
}

export default function AppContainer(props: AppContainerProps) {
  return (
    <View style={style}>
      <TopBar title={props.title} exit={props.exit} />
      {props.app}
    </View>
  );
}

const style = {
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
};
