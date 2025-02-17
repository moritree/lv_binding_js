import MessageApp from "./MessageApp";
import TopBar from "./TopBar";
import Colors from "./colors";
import { Button, Render, Text, View } from "lvgljs-ui";
import React, { useState } from "react";

console.log("INDEX TSX???");

const dark = Colors.dark;
const light = Colors.light;

const apps = new Map<string, () => JSX.Element | null>([
  ["messages", () => <MessageApp />],
]);
const keys = Array.from(apps.keys());
// const keys = Array.from<string | null>(apps.keys()).concat(new Array<null>(3));
console.log(apps);
console.log(keys);

function Root() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {active ? (
        <View
          style={{
            ...style.window,
            ...{ display: "flex", "flex-direction": "column" },
          }}
        >
          <TopBar title={active} exit={() => setActive(null)} />
          apps.get(active)?.()
        </View>
      ) : (
        <View style={{ ...style.window, ...style.home }}>
          {keys.map((app, index) => {
            console.log(app, index);
            const gridPos = {
              "grid-row-pos": Math.floor(index / 2),
              "grid-column-pos": index % 2,
            };
            <Button
              key={app}
              style={{ ...style.appButton, ...gridPos }}
              onPressedStyle={style.pressed}
              onClick={() => setActive(app)}
            >
              <Text style={{ "text-color": light, "font-size": 24 }}>
                {app}
              </Text>
            </Button>;
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
