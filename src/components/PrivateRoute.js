import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useFirebase } from "./FirebaseProvider";

export default function Private({ component: Component, ...restProps }) {
  const { user } = useFirebase();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return user ? (
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
