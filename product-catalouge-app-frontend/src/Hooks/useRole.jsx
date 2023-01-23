import { useEffect, useState } from "react";
import useToken from "./useToken";

const useRole = (email) => {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const token = useToken();

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/auth/getsuperuser/${email}/`,
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
  }, [email, token]);

  return { admin, loading };
};

export default useRole;
