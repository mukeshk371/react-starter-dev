import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../logo.svg";
import { PersonCircle, Search } from "react-bootstrap-icons";

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

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
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
                      <Search/>
                    </button>
                  </form>
                </div>
              </div>
              <div className="ml-6">
                <div className="flex space-x-4 font-medium">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-gray-600 text-white px-3 py-2 rounded-md flex items-center"
                  >
                    <PersonCircle className="me-2" />{" "}
                    {loggedInUser ? loggedInUser : "Profile"}
                  </button>
                  <button
                    onClick={() => setShowCart(true)}
                    className="bg-gray-600 text-white px-3 py-2 rounded-md"
                  >
                    Cart ({cartLength})
                  </button>
                  <button
                    onClick={
                      isAuthenticated
                        ? () => logout()
                        : () => loginWithRedirect()
                    }
                    className="bg-gray-600 text-white px-3 py-2 rounded-md"
                  >
                    {isAuthenticated ? "Logout" : "Sign In With Social"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMobileNavOpen ? "block" : "hidden"
          } sm:hidden transition-all duration-300`}
        >
          {/* Mobile menu items */}
          <hr className="m-0 bg-white" />
          <div className="px-2 py-3 space-y-1 flex flex-col">
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
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
                <Search/>
              </button>
            </form>
            <button
              onClick={() => setShowLogin(true)}
              className="text-white px-3 py-2 rounded-md font-medium flex items-center justify-center hover:bg-gray-700"
            >
              <PersonCircle className="me-2" />{" "}
              {loggedInUser ? loggedInUser : "Profile"}
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
            >
              Cart ({cartLength})
            </button>
            <button
              onClick={
                isAuthenticated ? () => logout() : () => loginWithRedirect()
              }
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
            >
              {isAuthenticated ? "Logout" : "Sign In With Social"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
