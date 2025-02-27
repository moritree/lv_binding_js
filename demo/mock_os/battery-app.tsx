import { Button, Slider, Text, View } from "lvgljs-ui";
import React, { useState } from "react";
import Style from "./style";

export default function BatteryApp() {
  const [powerSavingMode, setPowerSavingMode] = useState(false);
  const [powerWastingMode, setPowerWastingMode] = useState(false);

  return (
    <View style={Style.root}>

    <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Battery Settings:</Text>
      </View>
        
      <View style={Style.containerPadded}>
        <Button 
          style={Style.buttonBlack} 
          onPressedStyle={Style.buttonBlackPressed}
          onClick={() => {setPowerSavingMode(!powerSavingMode); setPowerWastingMode(false)}}
        >
          <Text style={Style.buttonBlackText}>
            Power Saving Mode: {powerSavingMode ? 'enabled' : 'disabled'}
          </Text>
        </Button>
        <Button 
          style={Style.buttonBlack} 
          onPressedStyle={Style.buttonBlackPressed}
          onClick={() => {setPowerWastingMode(!powerWastingMode); setPowerSavingMode(false)}}
        >
          <Text style={Style.buttonBlackText}>
            Power Wasting Mode: {powerWastingMode ? 'enabled' : 'disabled'}
          </Text>
        </Button>
      </View>

      <View style={Style.containerBlank}>
        <Text style={Style.textBodyBlack}>Battery Efficency:</Text>
      </View>

      <View style={Style.containerSlider}>
        <Slider
          style={Style.slider}
          indicatorStyle={Style.sliderIndicator}
          knobStyle={Style.sliderKnob}
          onIndicatorPressedStyle={Style.sliderIndicatorPressed}
          onKnobPressedStyle={Style.sliderKnobPressed}
        />
      </View>

    </View>
  );
}