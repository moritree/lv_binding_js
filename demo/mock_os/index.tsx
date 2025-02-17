import MessageApp from "./MessageApp";
import { Button, Render, Text, View } from "lvgljs-ui";
import React, { useState } from "react";

const dark = "#303030";
const light = "#f3f3f3";

function Root() {
  const [active, setActive] = useState<string | null>(null);

  const apps = new Map<string, () => JSX.Element | null>([
    ["messages", () => <MessageApp />],
  ]);

  // Fill up to 4th space with empty keys bc the grid has to be filled
  let keys: (string | null)[] = Array.from(apps.keys());
  for (let i = 4 - (apps.size % 4); i > 0; i--) keys.push(null);

  return (
    <>
      {active ? (
        apps.get(active)?.()
      ) : (
        <View style={Object.assign(style.window, style.home)}>
          {Array.from(apps.keys()).map((app, index) => {
            const gridPos = {
              "grid-row-pos": Math.floor(index / 2),
              "grid-column-pos": index % 2,
            };
            return app != null ? (
              <Button
                key={app}
                style={{ ...style.appButton, ...gridPos }}
                onPressedStyle={style.pressed}
                onPressed={() => setActive(app)}
              >
                <Text style={{ "text-color": light, "font-size": 24 }}>
                  {" "}
                  {app}{" "}
                </Text>
              </Button>
            ) : (
              <View key={index} style={{ ...style.appButton, ...gridPos }} />
            );
          })}
        </View>
      )}
    </>
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
    display: "flex",
    "justify-content": "center",
    "align-content": "center",
  },
  pressed: {
    "border-width": 2,
    "border-color": dark,
    "background-color": light,
  },
};

Render.render(<Root />);
