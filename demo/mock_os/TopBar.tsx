import Colors from "./colors";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface TopBarProps {
  title: String;
  exit: () => void;
}

export default function TopBar(props: TopBarProps) {
  return (
    <View style={style.bar}>
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
  },
  title: {
    "font-size": "32px",
    "text-color": Colors.light,
  },
};
