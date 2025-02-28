import Style from "./style";
import { Button, Slider, Text, View } from "lvgljs-ui";
import React, { useState } from "react";

export default function WifiApp() {
  const [isPairingEnabled, setIsPairingEnabled] = useState(true);

  const PIXEL = 4;

  return (
    <View style={Style.root}>
      <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Wifi Settings:</Text>
      </View>

      <View style={Style.containerPadded}>
        <Button
          style={Style.buttonWhite}
          onPressedStyle={Style.buttonWhitePressed}
          onClick={() => setIsPairingEnabled(!isPairingEnabled)}
        >
          <Text style={Style.buttonWhiteText}>
            Pairing mode: {isPairingEnabled ? "enabled" : "disabled"}
          </Text>
        </Button>
      </View>

      <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Hypercomplex Wifi Paramaters: </Text>
        <Text
          style={{
            ...Style.textSmallBlack,
            "padding-top": -PIXEL,
            "padding-bottom": PIXEL,
          }}
        >
          (DO NOT TOUCH!)
        </Text>
      </View>

      <View style={Style.containerSliderThick}>
        <Slider
          style={Style.sliderThick}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={80}
        />
      </View>
      <View style={Style.containerSliderThick}>
        <Slider
          style={Style.sliderThick}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={30}
        />
      </View>
      <View style={Style.containerSliderThick}>
        <Slider
          style={Style.sliderThick}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={60}
        />
      </View>
      <View style={Style.containerSliderThick}>
        <Slider
          style={Style.sliderThick}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={15}
        />
      </View>
      <View style={Style.containerSliderThick}>
        <Slider
          style={Style.sliderThick}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={90}
        />
      </View>
    </View>
  );
}
