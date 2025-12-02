import Link from "next/link";
import React from "react";
import ThemeControl from "./ThemeControl";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800 dark:text-gray-100"
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/manageProducts">Manage Products</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold text-gray-800 dark:text-gray-100">
          DeshiBaba
        </a>
      </div>

      {/* Center Menu for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li className="text-base font-semibold hover:text-red-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base font-semibold hover:text-red-400">
            <Link href="/products">Products</Link>
          </li>
          <li className="text-base font-semibold hover:text-red-400">
            <Link href="/manageProducts">Manage Products</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeControl />

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
