import { ViewMetadata } from ".";
import Colors from "./colors";
import { BUILT_IN_SYMBOL, Button, Text, View } from "lvgljs-ui";
import React from "react";

interface ViewContainerProps {
  meta: ViewMetadata;
  back: () => void;
  topLevel: boolean;
}

export default function ViewContainer(props: ViewContainerProps) {
  return (
    <View style={style.root}>
      <View style={style.bar}>
        <Button style={style.button} onClick={() => props.back()}>
          <Text>
            {props.topLevel ? BUILT_IN_SYMBOL.close : BUILT_IN_SYMBOL.left}
          </Text>
        </Button>
        <Text style={style.title}>{props.meta.title || ""}</Text>
      </View>
      {props.meta.view}
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
    height: "40px",
    "background-color": Colors.dark,
    padding: "2px",
    margin: 0,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    "flex-grow": 0,
    display: "flex",
    "flex-direction": "row",
  },
  title: {
    "font-size": "32px",
    "text-color": Colors.light,
  },
  button: {
    "font-size": "24",
    "text-color": Colors.light,
    "background-color": Colors.dark,
    height: "36px",
    width: "36px",
    "shadow-opacity": 0.0,
    "flex-grow": 0,
  },
};
