// import Link from "next/link";

import { Link } from "react-router-dom";

const NavItems = (
  <>
    <Link to={`/`}>
      <button className="btn btn-ghost">Home</button>
    </Link>
    <Link to={`/allproducts`}>
      <button className="btn btn-ghost">All Products</button>
    </Link>
    <Link to={`/addproduct`}>
      <button className="btn btn-ghost">Add product</button>
    </Link>
  </>
);

const Navbar = () => {
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
          <Link to={`/`} className="btn btn-ghost normal-case text-xl">
            Sasol Products
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
