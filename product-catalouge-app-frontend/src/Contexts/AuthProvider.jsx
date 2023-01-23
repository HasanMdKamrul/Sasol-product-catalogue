import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/auth/users/me/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("auth_token")}`,
          },
        });
        const data = await response.json();
        // console.log(data);
        setUser(data);
        setUserLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadUser();

    return () => loadUser();
  }, []);

  const value = { user, userLoading, setUserLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
