import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ComProps from './exemplo-com-props/ComProps';
// import SemProps from './exemplo-sem-props/SemProps';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={ SemProps } /> */}
        <Route exact path="/" component={ ComProps } />
      </Switch>
    );
  }
}

export default App;
