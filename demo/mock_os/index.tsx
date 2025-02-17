import { BUILT_IN_SYMBOL, Button, Line, Render, Text, View } from "lvgljs-ui";
import React from "react";

const dark = "#303030";
const light = "#f3f3f3";

function Root() {
  const apps: String[] = ["wryyy", "awoo", "nanana", "bone"];
  console.log(apps);

  apps.map((app, index) => {
    console.log(app);
    console.log(index % 2);
    console.log(Math.floor(index / 2));
  });

  return (
    <View style={Object.assign(style.window, style.home)}>
      {apps.map((app, index) => {
        return (
          <View
            style={{
              ...style.appButton,
              ...{
                "grid-row-pos": Math.floor(index / 2),
                "grid-column-pos": index % 2,
              },
            }}
          >
            <Text style={{ "text-color": light, "font-size": 24 }}>{app}</Text>
          </View>
        );
      })}
    </View>
  );
}

const style = {
  window: {
    width: "320px",
    height: "240px",
    "background-color": light,
    padding: 0,
    "border-radius": 0,
    "border-width": 0,
    overflow: "hidden",
  },
  home: {
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
    "background-color": dark,
    "grid-child": true,
    "justify-self": "stretch",
    "align-self": "stretch",
  },
};

Render.render(<Root />);
