import { useEffect, useState } from "react";

const useAuth = () => {
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
  }, []);

  return { user, userLoading, setUserLoading };
};

export default useAuth;
