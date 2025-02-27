import Colors from "./colors";

const PIXEL = 4;

const Style = {

/*********************
 *      CONTAINERS
 *********************/
  containerMain: { // Main container that wraps all other elements.
    'width': '100%',
    'height': '100%',
    'background-color': Colors.light,
    'flex-direction': 'column',
    'padding': 0,
    'border-radius': 0,
    'border-width': 0,
    'display': 'flex',
    'flex-grow': 1,
    'row-spacing': 2,
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
    'align-items': 'flex-start',
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
    'overflow': 'hidden',
    'flex-grow': 0,
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
  boxMessage: {  // Black box with width and height that adjust to the content inside.
    'width': '100%',
    'height': 'auto',
    'background-color': Colors.dark,
    'border-radius': PIXEL,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
  },

  /*********************
   *      TEXT
   *********************/

  textTitleBlack: { // Large title text.
    'font-size': 32,
    'text-color': Colors.dark,
    'text-wrap': 1,
    'text-align': 'center',
  },
  textBodyBlack: { // Body text.
    'font-size': 16,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'justify',
    'padding-top': PIXEL,
  },
  textSmallBlack: { // Small text.
    'font-size': 12,
    'text-color': Colors.dark,
    'width': '100%',
    'text-wrap': 1,
    'padding-top': PIXEL,
    'padding-bottom': -PIXEL,
  },
  textTitleWhite: { // Large title text.
    'font-size': 32,
    'text-color': Colors.light,
    'text-wrap': 1,
    'text-align': 'center',
  },
  textBodyWhite: { // Body text.
    'font-size': 16,
    'text-color': Colors.light,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'justify',
  },
  textSmallWhite: { // Small text.
    'font-size': 12,
    'text-color': Colors.light,
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

   /*********************
   *      MESSAGE
   *********************/

  root: {
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
    overflow: "auto",
    display: "flex",
    "flex-direction": "column",
    "flex-grow": 1,
    "row-spacing": 0,
    "scroll-dir": "bottom",
    "border-radius": 0,
    "border-width": 0,
    "background-color": Colors.light,
  },
  labelView: {
    "border-width": "0px",
    "border-radius": "0px",
    padding: 0,
    margin: 0,
    "background-color": Colors.dark,
    width: "auto",
    height: "auto",
  },
  labelText: {
    "text-color": Colors.light,
  },
  message: {
    "border-width": "0px",
    "border-radius": "0px",
    display: "flex",
    "flex-direction": "row",
    width: "100%",
    overflow: "hidden",
    margin: "0",
    padding: "0",
    "background-color": Colors.light,
    height: "auto",
  },
  messageText: {
    "text-color": Colors.dark,
  },
  you: {
    "border-width": "1px",
    width: "100%",
    "border-color": Colors.dark,
    padding: "2px",
  },
}

export default Style;
