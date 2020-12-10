import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar/Navbar";
import Primary from "./pages/Primary";
import FlavourPairingPage from "./pages/FlavourPairingPage";
import Results from "./pages/Results";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/primary" component={Primary} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/pairing/:id"
            component={FlavourPairingPage}
          />
          <PrivateRoute exact path="/results/" component={Results} />
          <PrivateRoute exact path="/profile/:id" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
