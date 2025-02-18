import Colors from "./colors";
import { Text, View } from "lvgljs-ui";
import React from "react";

const messages = ["Text", "Saying stuff", "Words", "Other things"];

export default function MessageApp() {
  return (
    <View style={style.base}>
      {messages.map((msg) => (
        <Text style={style.message}>{msg}</Text>
      ))}
    </View>
  );
}

const style = {
  base: {
    width: "100%",
    height: "100%",
    padding: "2px",
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    display: "flex",
    "flex-direction": "column",
    margin: 0,
    "flex-grow": 1,
    "background-color": Colors.light,
  },
  message: {
    "text-color": Colors.dark,
  },
};
