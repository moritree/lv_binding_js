import Style from "../../style";
import { Button, Slider, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useState } from "react";

export default function BatteryApp() {
  const [powerSavingMode, setPowerSavingMode] = useState(false);
  const [powerWastingMode, setPowerWastingMode] = useState(false);

  return (
    <View style={Style.root as StyleProps}>
      <View style={Style.containerBlank as StyleProps}>
        <Text style={Style.textBodyBlack as StyleProps}>Battery Settings:</Text>
      </View>

      <View style={Style.containerPadded as StyleProps}>
        <Button
          style={Style.buttonBlack}
          onPressedStyle={Style.buttonBlackPressed}
          onClick={() => {
            setPowerSavingMode(!powerSavingMode);
            setPowerWastingMode(true);
          }}
        >
          <Text style={Style.buttonBlackText}>
            Power Saving Mode: {powerSavingMode ? "enabled" : "disabled"}
          </Text>
        </Button>
        <Button
          style={Style.buttonBlack}
          onPressedStyle={Style.buttonBlackPressed}
          onClick={() => {
            setPowerWastingMode(!powerWastingMode);
            setPowerSavingMode(false);
          }}
        >
          <Text style={Style.buttonBlackText}>
            Power Wasting Mode: {powerWastingMode ? "disabled" : "enabled"}
          </Text>
        </Button>
      </View>

      <View style={Style.containerBlank as StyleProps}>
        <Text style={Style.textBodyBlack as StyleProps}>
          Battery Efficency:
        </Text>
      </View>

      <View style={Style.containerSlider as StyleProps}>
        <Slider
          style={Style.slider as StyleProps}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={10}
        />
      </View>
    </View>
  );
}
