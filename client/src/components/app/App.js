import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { HomePage, SignInPage, SignUpPage, VerifyEmailPage } from "../pages";
import RequiresAuth from "../hoc/RequiresAuth";
import LoginPageBreak from "../hoc/LoginPageBreak";

const App = () => {
  const sess = localStorage.getItem("SESS_ID");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(await getUser());
    };

    sess && fetchUser();
  }, [dispatch, sess]);

  return (
    <Switch>
      <Route
        path="/signin"
        render={(props) => (
          <LoginPageBreak>
            <SignInPage { ...props }/>
          </LoginPageBreak>
        )}
      />
      <Route
        path="/signup"
        render={() => (
          <LoginPageBreak>
            <SignUpPage />
          </LoginPageBreak>
        )}
      />
      <Route
        path="/"
        render={() => (
          <RequiresAuth>
            <HomePage />
          </RequiresAuth>
        )}
      />
      <Route
        path="/verifyEmail/:hash"
        render={() => (
          <RequiresAuth>
            <VerifyEmailPage />
          </RequiresAuth>
        )}
      />
    </Switch>
  );
};

export default App;
