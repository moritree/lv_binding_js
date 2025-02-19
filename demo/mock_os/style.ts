import Colors from "./colors";

const PIXEL = 4;

const style = {

/*********************
 *      CONTAINERS
 *********************/

  containerMain: { // Main container that wraps all other elements.
    'width': 320,
    'height': 240,
    'background-color': Colors.light,
    'flex-direction': 'column',
    'padding': 0,
    'border-radius': 0,
    'border-width': 0,
    'display': 'flex',
  },
  containerBlank: { // Invisible container for elements not in a box - has pixel padding on left and right-hand side.
    'padding-left': PIXEL,
    'padding-right': PIXEL,
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
  containerPadded: { // Invisible container for buttons and other elements that need extra padding to not cut off shadows etc.
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
  containerSlider: { // Invisible container with extra padding for sliders.
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
  containerSliderThick: { // Needs 1px extra padding on left and right for thick sides to accomadate for thicker indicator.
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

  /*********************
   *      BOXES
   *********************/

  boxBlack: { // Black box for titles or other elements that need impact.
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
  boxBlackColumn: { // Black box with a column layout, for side-by-side text boxes, buttons, etc.
    'width': '100%',
    'height': 'auto',
    'background-color': Colors.dark,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
    'flex-direction': 'column',
  },
  boxWhite: { // White box, fits nicely inside boxBlack.
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

  /*********************
   *      TEXT
   *********************/

  textTitle: { // Large title text.
    'font-size': 32,
    'text-color': Colors.light,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'center',
  },
  textBody: { // Body text.
    'font-size': 16,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'justify', 
  },
  textSmall: { // Small text.
    'font-size': 12,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
  },

  /*********************
   *      BUTTONS
   *********************/

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
  buttonBlackPressed: { // Pressed state for black button.
    'background-color': Colors.highlight,
    'border-radius': 0, 
    'border-width': 0,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonBlackText: { // Text for black button.
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
  buttonWhitePressed: { // Pressed state for white button.
    'background-color': Colors.highlight,
    'border-radius': 0, 
    'border-width': 2,
    'transition-property': 'background-color',
    'transition-duration': '0',
    'transition-timing-function': 'ease-in-out',
    'transition-delay': '0',
    'shadow-opacity': 0,
  },
  buttonWhiteText: { // Text for white button.
    'text-color': Colors.dark,
  },

  /*********************
   *      CHECKBOXES
   *********************/

  checkbox: {  // Main checkbox container style
    'text-color': Colors.light, 
    'font-size': 14,
  },
  checkboxIndicator: { // Tickable area of checkbox.
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'background-color': Colors.light,
  },
  checkboxIndicatorDisabled: { // Disabled state for checkbox.
    'border-radius': 0,
    'border-width': 0,
    'background-color': Colors.dark,
    'overlay-color': null,  
  },
  checkboxIndicatorChecked: { // Checked state for checkbox.
    'border-radius': 0,
    'border-width': PIXEL,
    'background-image': null,
    'background-color': Colors.highlight,
  },

  /*********************
   *      SLIDERS
   *********************/

  slider: { // Main slider container.
    'width': '100%',
    'height': 24,
    'background-color': Colors.light,
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'padding': PIXEL * 2,
  },
  sliderThick: { // Thick variant of slider.
    'width': '100%',
    'height': 24,
    'background-color': Colors.light,
    'border-radius': 0,
    'border-width': PIXEL,
    'border-color': Colors.dark,
    'padding': PIXEL
  },
  sliderIndicator: { // Indicator of slider.
    'border-radius': 0,
    'background-color': Colors.dark,
  },
  sliderIndicatorPressed: { // Pressed state for slider indicator.
    'border-radius': 0,
    'background-color': Colors.highlight,
  },
  sliderKnob: { // The movable of slider.
    'border-radius': 0,
    'border-width': PIXEL,
    'background-color': Colors.light,
    'padding': PIXEL,
  },  
  sliderKnobPressed: { // Pressed state for slider knob.
    'border-radius': 0,
    'border-width': PIXEL,
    'background-color': Colors.light,
    'padding': PIXEL,
  },

  /*********************
   *      LINES
   *********************/

  lineWhite: { // Thin white line to seperate sections.
    'line-color': Colors.light,
    'line-width': PIXEL
  },
  lineBlack: { // Thin dark line to seperate sections.
    'line-color': Colors.dark,
    'line-width': PIXEL
  },

  /*********************
   *      IMAGES
   *********************/

  image: { // Image.
    'width': 'auto',
    'height': 'auto',
  },
}

export default style;