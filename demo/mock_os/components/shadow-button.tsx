import Colors from "../colors";
import { Button, Text } from "lvgljs-ui";
import React from "react";

export default function ShadowButton(props: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <Button
      style={style.button}
      onPressedStyle={style.pressed}
      onClick={props.onClick}
    >
      <Text style={{ "text-color": Colors.dark }}>{props.text}</Text>
    </Button>
  );
}

const style = {
  button: {
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 2,
    padding: "2px",
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "ease-in-out",
    "transition-delay": "0",
    "shadow-width": "2px",
    "shadow-color": Colors.dark,
    "shadow-offset-x": 4,
    "shadow-offset-y": 4,
    "shadow-opacity": 1,
  },
  pressed: {
    "background-color": Colors.highlight,
    "border-radius": 0,
    "border-width": 2,
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "ease-in-out",
    "transition-delay": "0",
    "shadow-opacity": 0,
  },
};
