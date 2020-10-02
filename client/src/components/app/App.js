import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { HomePage, SignInPage, SignUpPage, VerifyEmailPage } from "../pages";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(await getUser());
    };

    !error && fetchUser();
  }, [dispatch, error]);

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/verifyEmail/:hash" exact component={VerifyEmailPage} />
    </Switch>
  );
};

export default App;
