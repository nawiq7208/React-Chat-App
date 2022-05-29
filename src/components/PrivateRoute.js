import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function Private({ component: Component, ...restProps }) {
  const isAuthenticated = true;
  return (
    <Route
      {...restProps}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }}
    />
  );
}
