import React from "react";
import './App.css';

// Components
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Views
import Dashboard from "./views/Dashboard";
import ViewUser from "./views/ViewUser";
import NotFound from "./views/NotFound";

// Assets
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <div className="page">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/user" component={ViewUser} />
                <Route exact path="/user/:id" component={ViewUser} />
                <Route exact path="/not-found" component={NotFound} />
                <Redirect exact from="/" to="/dashboard" />
                <Redirect from="*" to="/not-found" />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
