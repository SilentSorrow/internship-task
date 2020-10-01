import React from "react";
import "./App.css"
import { Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
    </Switch>
  );
};

export default App;
