import { ViewMetadata } from ".";
import TopBar from "./TopBar";
import Colors from "./colors";
import { View } from "lvgljs-ui";
import React from "react";

interface ViewContainerProps {
  meta: ViewMetadata;
  exit: () => void;
}

export default function ViewContainer(props: ViewContainerProps) {
  return (
    <View style={style}>
      <TopBar title={props.meta.title || ""} exit={props.exit} />
      {props.meta.view}
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
