import { Button, Slider, Text, View } from "lvgljs-ui";
import React, { useState } from "react";
import Style from "./style";

export default function BluetoothApp() {
  const [isPairingEnabled, setIsPairingEnabled] = useState(true);

  return (
    <View style={Style.root}>

    <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Bluetooth Settings:</Text>
      </View>
        
      <View style={Style.containerPadded}>
        <Button 
          style={Style.buttonWhite} 
          onPressedStyle={Style.buttonWhitePressed}
          onClick={() => setIsPairingEnabled(!isPairingEnabled)}
        >
          <Text style={Style.buttonWhiteText}>
            Pairing mode: {isPairingEnabled ? 'enabled' : 'disabled'}
          </Text>
        </Button>
      </View>

      <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Blueness:</Text>
      </View>

      <View style={Style.containerSlider}>
        <Slider
          style={Style.slider}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
          value={80}
        />
      </View>

      <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Toothsomness:</Text>
      </View>

      <View style={Style.containerSlider}>
        <Slider
          style={Style.slider}
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