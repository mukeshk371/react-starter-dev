import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../logo.svg";
import { Cart, PersonCircle, Search } from "react-bootstrap-icons";
import { StarsStyles } from "./Styles";

const NavBar = ({
  loggedInUser,
  cartItems,
  setSearchQuery,
  handleLogout,
  setShowLogin,
  setShowCart,
  cartLength,
  removeFromCart,
  addToCart,
}) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <StarsStyles>
      <nav className="bg-stars fixed top-0 w-full z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="w-full mt-[-6px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img className="h-8 App-logo" src={logo} alt="Logo" />
                </Link>
                <strong className="ml-2 text-white text-2xl">E-commerce</strong>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={toggleMobileNav}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {isMobileNavOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <div className="hidden sm:flex sm:items-center sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <form
                      className="flex w-full"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        className="p-2 border border-gray-600 rounded-l-md w-full"
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button
                        type="submit"
                        className=" bg-white text-black p-2 rounded-r-md"
                      >
                        <Search />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="flex space-x-4 font-medium">
                    <div className="relative">
                      <button
                        onClick={toggleProfile}
                        className="bg-gray-600 text-white px-3 py-2 rounded-md flex items-center"
                      >
                        <PersonCircle className="me-2" />{" "}
                        {loggedInUser ? loggedInUser : "Profile"}
                      </button>
                      <div
                        className={`${isProfileOpen ? "block" : "hidden"
                          } transition-all duration-300 absolute top-full right-0 bg-white w-[max-content] rounded overflow-hidden z-10 shadow-md`}
                      >
                        <ul className="p-0 m-0">
                          <li
                            className="p-[10px] px-3 hover:bg-gray-300 cursor-pointer"
                            onClick={() => setShowLogin(true)}
                          >
                            Sign In
                          </li>
                          <li
                            className="p-[10px] px-3 hover:bg-gray-300 cursor-pointer"
                            onClick={
                              isAuthenticated
                                ? () => logout()
                                : () => loginWithRedirect()
                            }
                          >
                            {isAuthenticated ? "Logout" : "Sign In With Social"}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowCart(true)}
                      className="bg-gray-600 text-white px-3 py-2 rounded-md flex items-center relative"
                    >
                      <Cart className="me-2" /> Cart
                      <span className="absolute top-[-10px] right-[-10px] bg-green-600 text-white rounded-[50%] w-[25px] h-[25px] flex items-center justify-center leading-[18px]">{cartLength}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${isMobileNavOpen ? "block" : "hidden"
              } sm:hidden transition-all duration-300`}
          >
            {/* Mobile menu items */}
            <hr className="m-0 bg-white" />
            <div className="px-2 pb-2 space-y-1 flex flex-col">
              <form
                className="flex w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="p-2 border border-gray-600 rounded-l-md w-full"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className=" bg-white text-black p-2 rounded-r-md"
                >
                  <Search />
                </button>
              </form>
              <div className="relative">
                <button
                  onClick={toggleProfile}
                  className="text-white px-3 py-2 rounded-md font-medium flex items-center justify-center hover:bg-gray-700 w-full"
                >
                  <PersonCircle className="me-2" />{" "}
                  {loggedInUser ? loggedInUser : "Profile"}
                </button>
                <div
                  className={`${isProfileOpen ? "block" : "hidden"
                    } transition-all duration-300 absolute top-full right-0 bg-white w-full rounded overflow-hidden z-10 shadow-lg`}
                >
                  <ul className="p-0 m-0 font-semibold">
                    <li
                      className="p-[10px] px-3 hover:bg-gray-300 cursor-pointer"
                      onClick={() => setShowLogin(true)}
                    >
                      Sign In
                    </li>
                    <li
                      className="p-[10px] px-3 hover:bg-gray-300 cursor-pointer"
                      onClick={
                        isAuthenticated
                          ? () => logout()
                          : () => loginWithRedirect()
                      }
                    >
                      {isAuthenticated ? "Logout" : "Sign In With Social"}
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowCart(true)}
                className="px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700 flex justify-center items-center"
              >
                <Cart className="me-2" /> Cart
                <span className=" bg-green-600 ms-2 text-white rounded-[50%] w-[25px] h-[25px] flex items-center justify-center leading-[18px]">{cartLength}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </StarsStyles>
  );
};

export default NavBar;
