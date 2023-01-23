import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/core/LoadingSpinner";
import { AuthContext } from "../Contexts/AuthProvider";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const { admin, loading } = useRole(user?.email);
  const location = useLocation();

  console.log("admin", admin);

  console.log("loading", loading);

  if (userLoading || loading) {
    return <LoadingSpinner />;
  }

  if (user && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
