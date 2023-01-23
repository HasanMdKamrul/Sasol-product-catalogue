import React, { useCallback } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      const loginData = {
        email: email.value,
        password: password.value,
      };

      try {
        const response = await fetch(
          `http://localhost:8000/auth/token/login/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );

        const data = await response.json();
        // console.log(data);
        if (response.ok) {
          // console.log(data);
          toast.success("Login Successful");
          localStorage.setItem("auth_token", data.auth_token);

          navigate(from, { replace: true });
        } else {
          toast.error("Email Or Password is incorrect !");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [from, navigate]
  );

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-gray-500 rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
              </div>

              <input
                name="password"
                type="password"
                placeholder="*********"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Log In
              </button>
            </div>
          </form>

          <Link
            to="/register"
            className="mt-8 text-xs font-light text-center text-gray-400"
          >
            Don't have an account?
            <span className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
              Register
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
