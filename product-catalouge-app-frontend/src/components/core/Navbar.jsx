// import Link from "next/link";

import { useCallback, useContext } from "react";
import { toast } from "react-hot-toast";
import { MdLogin, MdLogout } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assests/Images/sasollogo.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import useRole from "../../Hooks/useRole";
import useToken from "../../Hooks/useToken";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { admin, loading } = useRole(user?.email);
  const { token } = useToken();

  console.log(admin);
  const navigate = useNavigate();

  const NavItems = (
    <>
      <NavLink
        rel="noopener noreferrer"
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 pb-1 -mb-1 animate-pulse border-b-2 font-poppins font-bold  text-violet-400 border-violet-400 "
            : "flex items-center px-4 -mb-1 border-b-0 font-poppins font-bold text-dark  "
        }
      >
        Home
      </NavLink>
      <NavLink
        rel="noopener noreferrer"
        to={`/allproducts`}
        className={({ isActive }) =>
          isActive
            ? "flex items-center  pb-1 animate-pulse px-4 -mb-1 border-b-2 font-poppins font-bold  text-violet-400 border-violet-400 "
            : "flex items-center px-4 -mb-1 border-b-0 font-poppins font-bold   "
        }
      >
        All Products
      </NavLink>
      <NavLink
        rel="noopener noreferrer"
        to={`/addproduct`}
        className={({ isActive }) =>
          isActive
            ? "flex items-center  pb-1 animate-pulse  px-4 -mb-1 border-b-2 font-poppins font-bold  text-violet-400 border-violet-400 "
            : "flex items-center px-4 -mb-1 border-b-0 font-poppins font-bold   "
        }
      >
        Add product
      </NavLink>

      {token && (
        <NavLink
          rel="noopener noreferrer"
          to={`/myproducts`}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  pb-1 animate-pulse  px-4 -mb-1 border-b-2 font-poppins font-bold  text-violet-400 border-violet-400 "
              : "flex items-center px-4 -mb-1 border-b-0 font-poppins font-bold   "
          }
        >
          My products
        </NavLink>
      )}
      {admin && (
        <NavLink
          rel="noopener noreferrer"
          to={`/dashboard`}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  pb-1 animate-pulse  px-4 -mb-1 border-b-2 font-poppins font-bold  text-violet-400 border-violet-400 "
              : "flex items-center px-4 -mb-1 border-b-0 font-poppins font-bold   "
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/auth/token/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.detail === "Authentication credentials were not provided.") {
        localStorage.removeItem("auth_token");
        toast.success("Logout Successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [navigate]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <Link to="/" className="flex items-center p-2">
            <span className="w-24 flex justify-center items-center">
              <img src={logo} alt="" />
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          {token ? (
            <Link onClick={handleLogout} to="/register">
              <MdLogout />
            </Link>
          ) : (
            <Link to="/login">
              <MdLogin />
            </Link>
          )}
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </>
  );
};

export default Navbar;
