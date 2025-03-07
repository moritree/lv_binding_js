import Style from "../../style";
import { Button, Slider, Text, View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useState } from "react";

export default function BluetoothApp() {
  const [isPairingEnabled, setIsPairingEnabled] = useState(true);

  return (
    <View style={Style.root as StyleProps}>
      <View style={Style.containerBlank as StyleProps}>
        <Text style={Style.textBodyBlack as StyleProps}>
          Bluetooth Settings:
        </Text>
      </View>

      <View style={Style.containerPadded as StyleProps}>
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

      <View style={Style.containerBlank as StyleProps}>
        <Text style={Style.textBodyBlack as StyleProps}>Blueness:</Text>
      </View>

      <View style={Style.containerSlider as StyleProps}>
        <Slider
          style={Style.slider as StyleProps}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={80}
        />
      </View>

      <View style={Style.containerBlank as StyleProps}>
        <Text style={Style.textBodyBlack as StyleProps}>Toothsomness:</Text>
      </View>

      <View style={Style.containerSlider as StyleProps}>
        <Slider
          style={Style.slider as StyleProps}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={65}
        />
      </View>
    </View>
  );
}
