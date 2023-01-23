import React, { useCallback } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const {
        username,
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      } = e.target.elements;
      // console.log(
      //   username.value,
      //   firstname.value,
      //   lastname.value,
      //   email.value,
      //   password.value
      // );

      if (password.value !== confirmpassword.value) {
        return toast.error("Passwords do not match !");
      }

      const registerData = {
        username: username.value,
        first_name: firstname.value,
        last_name: lastname.value,
        email: email.value,
        password: password.value,
        re_password: confirmpassword.value,
      };

      try {
        const response = await fetch(`http://localhost:8000/auth/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success("Registration Successful");
          navigate("/");
        } else {
          toast.error("Something Went Wrong, Please try again !");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate]
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
                htmlFor="username"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Username
              </label>
              <input
                required
                name="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Firstname
              </label>
              <input
                required
                name="firstname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Lastname
              </label>
              <input
                required
                name="lastname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Confirm Password
                </label>
              </div>

              <input
                name="confirmpassword"
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
                Sign Up
              </button>
            </div>
          </form>

          <Link
            to="/login"
            className="mt-8 text-xs font-light text-center text-gray-400"
          >
            {" "}
            Already have an account?{" "}
            <span className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
              Signin
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
