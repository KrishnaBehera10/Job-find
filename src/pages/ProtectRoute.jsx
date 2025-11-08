import React from "react";
import { useglobaldata } from "../Context/MainContext";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const { loginUser } = useglobaldata();

  const isLoggedIn = loginUser && Object.keys(loginUser).length > 0;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default ProtectRoute;
