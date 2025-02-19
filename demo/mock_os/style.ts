import Colors from "./colors";

const PIXEL = 4;

const style = {

    // Containers

  mainContainer: { // Main container for all elements.
    'width': 320,
    'height': 240,
    'background-color': Colors.light,
    'flex-direction': 'column',
    'padding': 0,
    'border-radius': 0,
    'border-width': 0,
    'display': 'flex',
  },
  blackBox: { // Black section for titles etc.
    'width': '100%',
    'height': 'auto',
    'background-color': Colors.dark,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'gap': PIXEL,
    'justify-content': 'space-between',
  },
  blackBoxColumn: { // Black section with a column layout.
    'width': '100%',
    'height': 'auto',
    'background-color': Colors.dark,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
    'flex-direction': 'column',
  },
  whiteBox: { // White section, fits inside blackBox.
    'flex-grow': 1,
    'flex-basis': 0,
    'flex-shrink': 1,
    'height': 'auto',
    'background-color': Colors.light,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex', 
    'flex-direction': 'column',
  },
  blankContainer: { // Invisible container for text not already in a container with pixel padding on left-hand side.
    'padding-left': PIXEL,
    'padding-right': 0,
    'padding-top': 0, 
    'padding-bottom': 0,
    'width': '100%',
    'height': 'auto',
    'border-width': 0,
    'border-radius': 0,
    'background-color': Colors.light,
    'display': 'flex', 
    'flex-direction': 'column',
  },
  paddedContainer: { // Invisible container for buttons and other elements that need extra padding to not cut off shadows etc.
    'padding-left': PIXEL,
    'padding-right': PIXEL,
    'padding-top': PIXEL, 
    'padding-bottom': PIXEL * 2,
    'width': '100%',
    'height': 'auto',
    'border-width': 0,
    'border-radius': 0,
    'background-color': Colors.light,
    'display': 'flex', 
    'flex-direction': 'column',
  },
  sliderContainer: {
    'padding-left': PIXEL * 3,
    'padding-right': PIXEL * 3,
    'padding-top': PIXEL * 2, 
    'padding-bottom': PIXEL * 2,
    'width': '100%',
    'height': 'auto',
    'border-width': 0,
    'border-radius': 0,
    'background-color': Colors.light,
    'display': 'flex', 
    'flex-direction': 'column',
  },
  sliderThickContainer: { // Needs 1px extra padding on sides to accomadate for thicker indicator.
    'padding-left': PIXEL * 4,
    'padding-right': PIXEL * 4,
    'padding-top': PIXEL * 2, 
    'padding-bottom': PIXEL * 2,
    'width': '100%',
    'height': 'auto',
    'border-width': 0,
    'border-radius': 0,
    'background-color': Colors.light,
    'display': 'flex', 
    'flex-direction': 'column',
  },

  // Text

  title: { // Large title text.
    'font-size': 32,
    'text-color': Colors.light,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'center',
  },
  body: { // Body text.
    'font-size': 16,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'justify', 
  },
  small: { // Small text.
    'font-size': 12,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
  },

  // Buttons

  buttonBlack: { // Black button with white text.
    'background-color': Colors.dark,
    'border-radius': 0, 
    'border-width': 0,
    'padding-left': PIXEL * 2,
    'padding-right': PIXEL * 2,
    'padding-top': PIXEL,
    'padding-bottom': PIXEL,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
    'shadow-opacity': 0,
  },
  buttonBlackPressed: {
    'background-color': Colors.highlight,
    'border-radius': 0, 
    'border-width': 0,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonBlackText: {
    'text-color': Colors.light,
  },
  buttonWhite: { // White button with black text and drop-shadow.
    'background-color': Colors.light,
    'border-radius': 0, 
    'border-width': 2,
    'padding-left': PIXEL * 2,
    'padding-right': PIXEL * 2,
    'padding-top': PIXEL,
    'padding-bottom': PIXEL,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'ease-in-out',
    'transition-delay': '0',
    'shadow-width': PIXEL,
    'shadow-color': Colors.dark,
    'shadow-offset-x': 6,
    'shadow-offset-y': 6,
    'shadow-opacity': 1,
  },
  buttonWhitePressed: {
    'background-color': Colors.highlight,
    'border-radius': 0, 
    'border-width': 2,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'ease-in-out',
    'transition-delay': '0',
    'shadow-opacity': 0,
  },
  buttonWhiteText: {
    'text-color': Colors.dark,
  },

  // Checkboxes

  checkbox: {  // Main checkbox container style
    'text-color': Colors.light,  // This will affect the label text
    'font-size': 14,
  },
  indicator: {
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'background-color': Colors.light,
  },
  indicatorDisabled: {
    'border-radius': 0,
    'border-width': 0,
    'background-color': Colors.dark,
    'overlay-color': null,  
  },
  indicatorChecked: {
    'border-radius': 0,
    'border-width': PIXEL,
    'background-image': null,
    'background-color': Colors.highlight,
  },

  //Sliders

  slider: {
    'width': '100%',
    'height': 24,
    'background-color': Colors.light,
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'padding': PIXEL * 2,
  },
  sliderThick: {
    'width': '100%',
    'height': 24,
    'background-color': Colors.light,
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'padding': PIXEL
  },
  indicatorStyle: {
    'border-radius': 0,
    'background-color': Colors.dark,
  },
  knobStyle: {
    'border-radius': 0,
    'border-width': PIXEL,
    'background-color': Colors.light,
    'padding': PIXEL,
  },
  indicatorPressedStyle: {
    'border-radius': 0,
    'background-color': Colors.highlight,
  },
  knobPressedStyle: {
    'border-radius': 0,
    'border-width': PIXEL,
    'background-color': Colors.light,
    'padding': PIXEL,
  },

  // Switches - not working properly.

  // switch: {
  //   'border-radius': 0,
  //   'border-width': PIXEL,
  //   'background-color': Colors.light,
  // },
  // switchChecked: {
  //   'border-radius': 0,
  //   'border-width': PIXEL,
  //   'background-color': Colors.dark,
  //   'padding': PIXEL,
  // },
  // switchKnob: {
  //   'border-radius': 0,
  //   'border-width': PIXEL,
  //   'border-color': Colors.highlight,
  //   'background-color': Colors.highlight,
  // },

  // Lines

  whiteLine: { // Thin white line to seperate sections.
    'line-color': Colors.light,
    'line-width': PIXEL
  },
  blackLine: { // Thin Colors.dark line to seperate sections.
    'line-color': Colors.dark,
    'line-width': PIXEL
  },

  // Images

  image: {
    'width': 'auto',
    'height': 'auto',
}
}

export default style;