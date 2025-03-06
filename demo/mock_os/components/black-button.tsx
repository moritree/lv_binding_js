import Colors from "../colors";
import Style from "../style";
import { Button, Text, View } from "lvgljs-ui";
import React from "react";

export default function BlackButton(props: {
  text: string;
  onClick?: () => void;
  style?: any;
  onPressedStyle?: any;
}) {
  return (
    <View
      style={{
        ...Style.containerBlank,
        ...{ padding: "2px", width: "auto", height: "auto" },
      }}
    >
      <Button
        style={{ ...style.button, ...props.style }}
        onPressedStyle={{
          ...style.pressed,
          ...(props.onPressedStyle || props.style || {}),
        }}
        onClick={props.onClick}
      >
        <Text style={{ "text-color": Colors.light }}>{props.text}</Text>
      </Button>
    </View>
  );
}

const style = {
  button: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "center",
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
