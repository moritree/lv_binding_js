import Colors from "./colors";
import { Text, View } from "lvgljs-ui";
import React from "react";

interface Message {
  from: string;
  content: string;
}

const messages: Message[] = [
  { from: "You", content: "Text" },
  { from: "Ben", content: "Saying stuff" },
  { from: "Someone", content: "Words" },
  { from: "You", content: "Other things" },
];

export default function MessageApp() {
  return (
    <View style={style.base}>
      {messages.map((msg, index) => {
        let viewStyle = style.message;
        if (msg.from == "You") viewStyle = { ...viewStyle, ...style.you };

        return (
          <View key={index} style={viewStyle}>
            <Text style={style.messageText}> {msg.from} </Text>
            <Text style={style.messageText}> {msg.content} </Text>
          </View>
        );
      })}
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
    "border-width": "0px",
    "border-radius": "0px",
    display: "flex",
    "flex-direction": "row",
    width: "100%",
    overflow: "hidden",
    margin: "0",
    padding: "0",
    "background-color": Colors.light,
    height: "auto",
  },
  messageText: {
    "text-color": Colors.dark,
  },
  you: {
    "border-width": "1px",
    width: "100%",
    "border-color": Colors.dark,
    padding: "2px",
  },
};
