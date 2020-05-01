import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({
  component: privateComponent,
  render: publicComponent,
  ...rest
}) {
  let { authenticationStatus } = useSelector(
    (state) => state.theCurrentAuthenticationStatus
  );
  return (
    <>
      {authenticationStatus ? (
        <Route {...rest} render={() => privateComponent()} />
      ) : (
        <Route {...rest} render={() => publicComponent()} />
      )}
    </>
  );
}
