import { useState } from "react";
import logo from "/logo.png";
import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#00bba6] shadow">
      <div className="mx-10 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-auto h-10 sm:h-10 my-2"
              src={logo}
              alt="QuickShop Logo"
            />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${isOpen
            ? "translate-x-0 opacity-100 "
            : "opacity-0 -translate-x-full "
            } absolute inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex bg-[#00bba6] flex-col md:flex-row md:mx-6 ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "transition-colors duration-300 transform dark:hover:text-blue-400  md:my-0 bg-[#018576] hover:text-white text-white p-5 text-[20px]" : "transition-colors duration-300 transform dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              }
              href="#"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "transition-colors duration-300 transform dark:hover:text-blue-400  md:my-0 bg-[#018576] hover:text-white text-white p-5 text-[20px]" : "transition-colors duration-300 transform dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              }
              href="#"
            >
              Shop
            </NavLink>
            <a
              className="transition-colors duration-300 transform  dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              href="#"
            >
              Contact
            </a>
            <a
              className="transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              href="#"
            >
              About
            </a>
          </div>

          <div className="flex justify-center md:block bg-[#00bba6] ">
            <a
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <FaCartPlus className="text-3xl text-white" />
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
