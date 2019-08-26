// Libraries
import React from 'react';

// Components
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./layout";

// Styles
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Menu title="My App" />
          <div className="body">
            <Layout />
          </div>        
        </section>
      </Router>
    );
  }
}

export default App;
