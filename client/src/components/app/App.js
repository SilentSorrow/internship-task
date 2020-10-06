import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/user.actions";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  VerifyEmailPage,
} from "../pages";

import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  const sessCookie = Cookies.get("SESS_ID");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(await getUser());
    };

    sessCookie && fetchUser();
  }, [dispatch, sessCookie]);

  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} sess={sessCookie}/>
      <Route path="/signin" exact render={(props) => <SignInPage  { ...props } sess={sessCookie}/>} />
      <Route path="/signup" exact render={(props) => <SignUpPage  { ...props } sess={sessCookie}/>}  />
      <Route path="/verifyEmail/:hash" exact component={VerifyEmailPage} sess={sessCookie}/>
    </Switch>
  );
};

export default App;
