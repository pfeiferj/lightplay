import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

import Library from './components/Library';
import themeDetails from './theme.json';

const getTheme = () => {
  return createMuiTheme(themeDetails as ThemeOptions);
};

export default function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <Router>
        <Switch>
          <Route path="/" component={Library} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
