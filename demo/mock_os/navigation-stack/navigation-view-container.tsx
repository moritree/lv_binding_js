import Colors from "../colors";
import { BUILT_IN_SYMBOL, Button, Text, View } from "lvgljs-ui";
import React from "react";

export default function NavigationViewContainer(props: {
  view: JSX.Element;
  title?: string;
  back: () => void;
  topLevel: boolean;
}) {
  return (
    <View style={style.root}>
      <View style={style.bar}>
        <Button style={style.button} onClick={() => props.back()}>
          <Text>
            {props.topLevel ? BUILT_IN_SYMBOL.close : BUILT_IN_SYMBOL.left}
          </Text>
        </Button>
        <Text style={style.title}>{props.title || ""}</Text>
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
    height: "40px",
    "background-color": Colors.dark,
    padding: "2px",
    margin: 0,
    "border-radius": 0,
    "border-width": 0,
  },
  title: {
    "font-size": "20px",
    "text-color": Colors.light,
    "padding-top": 4,
    "text-align": "center",
    width: "100%",
  },
  button: {
    "background-color": Colors.dark,
    height: "34px",
    width: "34px",
    "shadow-opacity": 0.0,
    "flex-grow": 0,
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
};
