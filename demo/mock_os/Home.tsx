import Colors from "./colors";
import { Button, Text, View } from "lvgljs-ui";
import React from "react";

interface HomeProps {
  apps: Map<string, () => JSX.Element | null>;
  activate: (app: string) => void;
}

export default function Home(props: HomeProps) {
  return (
    <View style={style.home}>
      {Array.from(props.apps.keys()).map((app, index) => {
        const gridPos = {
          "grid-row-pos": Math.floor(index / 2),
          "grid-column-pos": index % 2,
        };
        return (
          <Button
            key={app}
            style={{ ...style.appButton, ...gridPos }}
            onPressedStyle={style.pressed}
            onClick={() => props.activate(app)}
          >
            <Text style={{ "text-color": Colors.light, "font-size": 24 }}>
              {app}
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
