import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvaider";
import toast, { Toaster } from 'react-hot-toast';
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You logged out successfully 🎉"))
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li className="font-bold text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      
   
    {user && <>
      (<li className="font-bold text-xl">
        <NavLink to="/profile">My Profile</NavLink>
      </li>)
      </>}
       </>
  );

  return (
    <div className="border-b border-gray-400 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              <div className="relative group flex items-center">
                <img
                  src={user?.photoURL }
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer object-cover"
                />
                <span className="absolute right-full mr-3 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {user.displayName || "User"}
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="btn text-lg font-medium rounded-xl text-white bg-gradient-to-r from-red-500 to-pink-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xl mr-2 text-blue-600 underline hover:bg-red-600 hover:py-1 hover:px-3 hover:mr-0 hover:rounded-xl hover:text-white hover:no-underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn text-lg font-medium rounded-xl text-white bg-gradient-to-r from-violet-500 to-purple-600"
              >
                Signup
              </Link>
            </>
          )}
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Navbar;

