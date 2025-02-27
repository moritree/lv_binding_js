import Colors from "./colors";
import { Text, View } from "lvgljs-ui";
import React from "react";
import Style from "./style";

const style = {}

export default function SettingsApp() {
  return (
    <View style={Style.root}>
      <Text>Settings</Text>
    </View>
  );
}