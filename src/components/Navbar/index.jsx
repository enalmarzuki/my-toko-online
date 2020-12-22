import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const isNavLinkActive = (path) => {
    return props.location.pathname === path ? " font-bold" : "";
  };

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="container px-6 md:px-10 lg:pt-8 xl:px-10">
      <div className="bg-white pt-5">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between ">
            <div>
              <Link to="/" className="text-3xl font-bold">
                <span className="text-blue-500">Online</span>Shop.
              </Link>
            </div>
            <div>
              <button
                onClick={() => setIsMobile(!isMobile)}
                className="focus:outline-none text-white block lg:hidden"
              >
                <svg
                  className="w-8 h-8 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className={!isMobile ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                  <path
                    className={isMobile ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isMobile ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row w-full lg:items-center justify-end`}
          >
            <div className="flex flex-col mt-3 lg:mt-0 lg:flex-row text-lg">
              <Link
                to="/"
                className={`block py-1 lg:py-0 lg:px-4 ${isNavLinkActive("/")}`}
              >
                Beranda
              </Link>
              <Link
                to="/tentang-kami"
                className={`block py-1 lg:py-0 lg:px-4 ${isNavLinkActive(
                  "/tentang-kami"
                )}`}
              >
                Tentang Kami
              </Link>
              <Link
                to="/bantuan"
                className={`block py-1 lg:py-0 lg:px-4 ${isNavLinkActive(
                  "/bantuan"
                )}`}
              >
                Bantuan
              </Link>

              <Link
                to="/login"
                className={`block py-1 lg:py-0 lg:px-4 ${isNavLinkActive(
                  "/login"
                )}`}
              >
                Masuk
              </Link>

              <Link
                to="/keranjang"
                className={`block py-1 lg:py-0 lg:px-4 ${isNavLinkActive(
                  "/keranjang"
                )}`}
              >
                <svg
                  className="w-8 h-8 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
