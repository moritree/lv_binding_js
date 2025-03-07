import Colors from "../colors";
import Style from "../style";
import { Button, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

export default function BlackButton(props: {
  text: string;
  onClick?: () => void;
  style?: any;
  onPressedStyle?: any;
}) {
  return (
    <View
      style={
        {
          ...Style.containerBlank,
          ...{ padding: 2, width: "auto", height: "auto" },
        } as StyleProps
      }
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
    padding: 4,
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
    "shadow-opacity": 0,
  },
  pressed: {
    "background-color": Colors.highlight,
    "border-radius": 0,
    padding: 2,
    "border-width": 2,
    "border-color": Colors.dark,
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "linear",
    "transition-delay": "0",
  },
};
