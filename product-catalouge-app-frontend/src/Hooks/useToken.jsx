const useToken = () => {
  const token = localStorage.getItem("auth_token");

  return {
    token,
  };
};

export default useToken;
