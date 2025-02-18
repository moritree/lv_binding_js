import Colors from "./colors";
import { BUILT_IN_SYMBOL, Button, Text, View } from "lvgljs-ui";
import React from "react";

interface TopBarProps {
  title: String;
  exit: () => void;
}

export default function TopBar(props: TopBarProps) {
  return (
    <View style={style.bar}>
      <Button style={style.button} onClick={() => props.exit()}>
        <Text>{BUILT_IN_SYMBOL.close}</Text>
      </Button>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
}

const style = {
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
