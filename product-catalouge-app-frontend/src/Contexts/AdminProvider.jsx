import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/auth/getsuperuser/${user?.email}/`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);

        if (data.success) {
          setAdmin(true);
          setLoading(false);
        } else {
          setAdmin(false);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    loadAdmin();
  }, [user?.email]);

  const value = { admin, loading };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
