import Colors from "./colors";
import { Text, View } from "lvgljs-ui";
import React from "react";
import Style from "./style";

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
    <View style={Style.containerMain}>
      {messages.map((msg, index) => (
        <View key={index} style={Style.containerBlank}>
          {msg.from === "You" ? (
            <>
              <Text style={{...Style.textSmallBlack, 'text-align': 'right'}}>{msg.from}</Text>
              <View style={{...Style.boxMessage, ...Style.boxMessageRight}}>
                <Text style={{...Style.textBodyWhite, 'text-align': 'right'}}>{msg.content}</Text> 
              </View>
            </>
          ) : (
            <>
              <Text style={Style.textSmallBlack}>{msg.from}</Text>
              <View style={Style.boxMessage}>
                <Text style={Style.textBodyWhite}>{msg.content}</Text>
              </View>
            </>
          )}
        </View>
      ))}
    </View>
  );
} // todo: figure out why boxes arent aligning properly.