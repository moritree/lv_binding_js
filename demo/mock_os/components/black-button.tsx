import Colors from "../colors";
import { Button, Text } from "lvgljs-ui";
import React from "react";

export default function BlackButton(props: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <Button
      style={style.button}
      onPressedStyle={style.pressed}
      onClick={props.onClick}
    >
      <Text style={{ "text-color": Colors.light }}>{props.text}</Text>
    </Button>
  );
}

const style = {
  button: {
    "background-color": Colors.dark,
    "border-radius": 0,
    "border-width": 0,
    padding: "4px",
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
    "shadow-opacity": 0,
  },
  pressed: {
    "background-color": Colors.highlight,
    "border-radius": 0,
    padding: "2px",
    "border-width": "2px",
    "border-color": Colors.dark,
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
  },
};
