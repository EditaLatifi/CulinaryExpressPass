import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Outlet>{element}</Outlet>;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
