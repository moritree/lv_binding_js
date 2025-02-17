import { Text, View } from "lvgljs-ui";
import React from "react";

const dark = "#303030";
const light = "#f3f3f3";

export default function MessageApp() {
  return (
    <View style={style.base}>
      <Text>Messages</Text>
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
  },
};
