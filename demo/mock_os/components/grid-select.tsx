import Colors from "../colors";
import { NAV_BAR_HEIGHT } from "../navigation-stack/navigation-view-container";
import { Button, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

export default function GridSelect(props: {
  push: (app: JSX.Element, title?: string) => void;
  options: ((push: (app: JSX.Element, title?: string) => void) => {
    title: string;
    view: JSX.Element;
    buttonTitle?: string;
  })[];
  height?: string;
}) {
  return (
    <View style={style.root as StyleProps}>
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
              style={{ ...style.appButton, ...gridPos } as StyleProps}
              onPressedStyle={style.pressed}
              onClick={() => props.push(opt.view, opt.title)}
            >
              <Text style={{ "text-color": Colors.light, "font-size": 24 }}>
                {opt.buttonTitle || opt.title}
              </Text>
            </Button>
          );
        })}
    </View>
  );
}

const style = {
  root: {
    width: "100%",
    height: 240 - NAV_BAR_HEIGHT + "px",
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
