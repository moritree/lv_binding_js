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
  { from: "You", content: "So much to say" },
  { from: "Baby", content: "WAA WAA" },
  { from: "USA", content: "Superbowl eagle fireworks" },
  { from: "You", content: "Noooooooo" },
  { from: "Vader", content: "NOOOOOOOO" },
  { from: "Jeffandrew", content: "stuff" },
  { from: "You", content: "Lorem ipsum" },
  { from: "You", content: "dolor sit amet..." },
];

export default function MessageApp() {
  return (
    <View style={style.root}>
      {messages.map((msg, index) => {
        let viewStyle = style.message;
        if (msg.from == "You") viewStyle = { ...viewStyle, ...style.you };

        return (
          <View key={index} style={viewStyle}>
            {msg.from !== "You" ? (
              <View style={style.labelView}>
                <Text style={style.labelText}> {msg.from} </Text>
              </View>
            ) : (
              <></>
            )}
            <Text style={style.messageText}> {msg.content} </Text>
          </View>
        );
      })}
    </View>
  );
}

const style = {
  root: {
    width: "100%",
    height: "100%",
    padding: "2px",
    margin: 0,
    overflow: "auto",
    display: "flex",
    "flex-direction": "column",
    "flex-grow": 1,
    "row-spacing": "2px",
    "scroll-dir": "bottom",
    "border-radius": 0,
    "border-width": 0,
    "background-color": Colors.light,
  },
  labelView: {
    "border-width": "0px",
    "border-radius": "0px",
    padding: 0,
    margin: 0,
    "background-color": Colors.dark,
    width: "auto",
    height: "auto",
  },
  labelText: {
    "text-color": Colors.light,
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
