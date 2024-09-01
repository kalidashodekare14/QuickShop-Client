import { useState } from "react";
import logo from "/logo.png";
import { FaCartPlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutSystem } = useAuth()

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart()


  const handleLogoutSystem = () => {
    logOutSystem()
  }

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#00bba6] shadow">
      <div className="mx-10 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <p href="#">
            <img
              className="w-auto h-10 sm:h-10 my-2"
              src={logo}
              alt="QuickShop Logo"
            />
          </p>

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
            <p
              className="transition-colors duration-300 transform  dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              href="#"
            >
              Contact
            </p>
            <p
              className="transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400  md:my-0 hover:bg-[#018576] hover:text-white text-white p-5 text-[20px]"
              href="#"
            >
              About
            </p>
          </div>
          <Link to="/cart-checkout">
            <div className="flex justify-center md:block bg-[#00bba6] ">
              <p
                className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                href="#"
              >
                <FaCartPlus className="text-3xl text-white" />
                <span className="absolute top-0 translate-x-6 -translate-y-4 p-2 text-xs text-white bg-blue-500 rounded-full">{totalUniqueItems}</span>
              </p>
            </div>
          </Link>
          <div className="ms-10">
            {
              user ? (
                <div className=" dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#00bba6] text-white font-medium  z-[1] w-52  shadow">
                    <li>
                      <Link to={"/profile"}>
                        <p className="justify-between">
                          Profile
                        </p>
                      </Link>
                    </li>
                    <li><p>Settings</p></li>
                    <li><p onClick={handleLogoutSystem}>Logout</p></li>
                  </ul>
                </div>
              ) : <div>
                <Link to={"/login"}>
                  <button className="btn">Login</button>
                </Link>
              </div>
            }
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
