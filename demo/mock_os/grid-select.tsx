import Colors from "./colors";
import { Button, Text, View } from "lvgljs-ui";
import React from "react";

export default function GridSelect(props: {
  push: (app: JSX.Element, title?: string) => void;
  options: ((push: (app: JSX.Element, title?: string) => void) => {
    title: string;
    view: JSX.Element;
  })[];
  height?: string;
}) {
  const rootStyle = {
    ...style.home,
    ...{ height: props.height || style.home.height },
  };
  return (
    <View style={rootStyle}>
      {props.options
        .map((opt) => opt(props.push))
        .map((opt, index) => {
          const gridPos = {
            "grid-row-pos": Math.floor(index / 2),
            "grid-column-pos": index % 2,
          };
          return (
            <Button
              key={index}
              style={{ ...style.appButton, ...gridPos }}
              onPressedStyle={style.pressed}
              onClick={() => props.push(opt.view, opt.title)}
            >
              <Text style={{ "text-color": Colors.light, "font-size": 24 }}>
                {opt.title}
              </Text>
            </Button>
          );
        })}
    </View>
  );
}

const style = {
  home: {
    width: "100%",
    height: "100%",
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
