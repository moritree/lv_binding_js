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
        let msgStyle = style.message;
        if (msg.from == "You") msgStyle = { ...style.message, ...style.you };
        console.log(msgStyle);

        return (
          <Text key={index} style={msgStyle}>
            {msg.content}
          </Text>
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
    "text-color": Colors.dark,
  },
  you: {
    "border-width": "1px",
    width: "100%",
    "border-color": Colors.dark,
    padding: "2px",
  },
};
