import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import "./PrivateRoute.css"

const PrivateRoute = ({children, ...others}) => {
const { user, loading } = useAuth();
if(loading){
  return  <Spinner className="spinner" animation="border" variant="danger" />
}

  return (<div>
      <Route
      {...others}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  </div>);
};

export default PrivateRoute;
