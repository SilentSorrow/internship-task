import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  VerifyEmailPage,
} from "../pages";

const App = () => {
  const sessCookie = Cookies.get("SESS_ID");
  const dispatch = useDispatch();
  const userError = useSelector((state) => state.user.error);
  const petsError = useSelector((state) => state.pets.error);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(await getUser());
    };

    if (sessCookie) {
      fetchUser();
    }
    if (userError || petsError) {
      console.log(userError)
      history.push("/signin")
    }
  }, [dispatch, sessCookie, userError, petsError, history]);

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
