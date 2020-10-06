import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component, sess }) => {
  const Component = component;

  return sess ? <Component /> : <Redirect to="/signin" />;
};

export default ProtectedRoute;
