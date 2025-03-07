import Colors from "../colors";
import Style from "../style";
import { Button, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

export default function ShadowButton(props: {
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
          ...{ padding: 2, width: "auto" },
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
        <Text style={{ "text-color": Colors.dark }}>{props.text}</Text>
      </Button>
    </View>
  );
}

const style = {
  button: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "center",
    "align-content": "center",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 1,
    padding: "2px",
    "transition-property": "background-color",
    "transition-duration": "0",
    "transition-timing-function": "ease-in-out",
    "transition-delay": "0",
    "shadow-width": "2px",
    "shadow-color": Colors.dark,
    "shadow-offset-x": 2,
    "shadow-offset-y": 2,
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
