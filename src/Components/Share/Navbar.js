import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FaHome } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/manageInventories">All Items</Link>
          </li>
          <li>
            <Link to="/addItem">Add Item</Link>
          </li>
          <li>
            <Link to="/myItem">My Item</Link>
          </li>
        </>
      )}

      <li>
        {user ? (
          <p onClick={logout}>Sign Out</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar px-12 mx-auto text-white shadow-2xl rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral"
            >
              {menuItem}
            </ul>
          </div>
          <div className="btn btn-ghost text-secondary font-extrabold text-3xl uppercase">
            {" "}
            <MdAgriculture className="mr-4 text-secondary" size={55} />{" "}
            Development Agriculture{" "}
          </div>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-bold text-xl hover:bg-se">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
