import CalendarApp from "./calendar/calendar-app";
import Colors from "./colors";
import MessageApp from "./message-app";
import { Button, Text, View } from "lvgljs-ui";
import React, { useState } from "react";

const apps: ((push: (app: JSX.Element, title?: string) => void) => {
  title: string;
  view: JSX.Element;
})[] = [
  (_) => ({ title: "messages", view: <MessageApp /> }),
  (push) => ({
    title: "calendar",
    view: <CalendarApp push={push} />,
  }),
];

interface HomeProps {
  push: (app: JSX.Element, title?: string) => void;
}

export default function Home(props: HomeProps) {
  return (
    <View style={style.home}>
      {apps
        .map((app) => app(props.push))
        .map((app, index) => {
          const gridPos = {
            "grid-row-pos": Math.floor(index / 2),
            "grid-column-pos": index % 2,
          };
          return (
            <Button
              key={index}
              style={{ ...style.appButton, ...gridPos }}
              onPressedStyle={style.pressed}
              onClick={() => props.push(app.view, app.title)}
            >
              <Text style={{ "text-color": Colors.light, "font-size": 24 }}>
                {app.title!}
              </Text>
            </Button>
          );
        })}
    </View>
  );
}

const style = {
  home: {
    width: "320px",
    height: "240px",
    "background-color": Colors.light,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    "grid-template-rows": "1fr 1fr",
    padding: "4px",
    "row-spacing": "4px",
    "column-spacing": "4px",
  },
  appButton: {
    padding: 0,
    "border-radius": 0,
    "border-width": 0,
    "background-color": Colors.dark,
    "grid-child": true,
    "justify-self": "stretch",
    "align-self": "stretch",
    display: "flex",
    "justify-content": "center",
    "align-content": "center",
  },
  pressed: {
    "border-width": 2,
    "border-color": Colors.dark,
    "background-color": Colors.light,
  },
};
