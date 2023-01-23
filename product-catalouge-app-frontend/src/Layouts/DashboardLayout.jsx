import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/core/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { admin } = useRole(user?.email);

  return (
    <>
      <div>
        <Navbar />
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80  ">
              {admin && (
                <>
                  <li>
                    <Link to="/dashboard/allusers">
                      <FaUser className="text-black" />
                      <p className="font-bold"> All Users</p>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
