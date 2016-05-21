/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {props.children}
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
