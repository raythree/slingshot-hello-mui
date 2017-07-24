import React from 'react';

import {
  lightBlue800, lightBlue900,
  redA700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

/*
const customTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlue800,
    primary2Color: lightBlue900,
    primary3Color: grey400,
    accent1Color: redA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lightBlue900,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  tabs: {
    backgroundColor: white,
    textColor: grey400,
    selectedTextColor: lightBlue800,
  }
};
*/

/* styles as above can be passed to getMuiTheme */
const muiTheme = getMuiTheme(lightBaseTheme);

export default (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      {props.children}
    </div>  
  </MuiThemeProvider>
);



