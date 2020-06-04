import React from 'react';
import './App.css';

import {
  BrowserRouter as Router
} from "react-router-dom";

import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <section className="App">
          <header>Header</header>
          <div className="content">
            <Routes />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
