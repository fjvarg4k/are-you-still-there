import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ViewOne from './components/view-one';
import ViewTwo from './components/view-two';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ViewOne} />
          <Route exact path="/view-two" component={ViewTwo} />
        </div>
      </Router>
    );
  }
}

export default App;
