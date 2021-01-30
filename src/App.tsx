import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Library from './components/Library';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Library} />
      </Switch>
    </Router>
  );
}
