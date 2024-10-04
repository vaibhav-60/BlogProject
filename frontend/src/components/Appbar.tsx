import { useState } from "react";
import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT from localStorage
    navigate("/signin"); // Redirect to Sign-In page
  };

  return (
    <nav className="bg-white dark:bg-neutral-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/blogs'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BBlogs</span>
        </Link>
        <div className="space-x-6 flex md:order-2">
          <Link to={`/publish`}>
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 
                         font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 
                         dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Get started
            </button>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <Avatar size={"big"} name="harkirat" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-700 border border-gray-200 
                              dark:border-gray-600 rounded-md shadow-lg py-1 z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                             hover:bg-gray-100 dark:hover:bg-neutral-600"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                             hover:bg-gray-100 dark:hover:bg-neutral-600"
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                             hover:bg-gray-100 dark:hover:bg-neutral-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};