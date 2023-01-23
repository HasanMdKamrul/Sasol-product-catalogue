import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/core/LoadingSpinner";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();
  if (userLoading) {
    return <LoadingSpinner />;
  }

  if (user && user?.id) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
