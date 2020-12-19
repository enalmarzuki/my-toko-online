import React, { useState } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="bg-blue-500">
      <div className="flex  flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 lg:px-10 border-blue-400 border-b lg:border-b-0">
          <div>
            <a href="/" className="uppercase font-semibold text-white">
              GoShopping
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsMobile(!isMobile)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                className="w-10 h-10 text-white"
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
          } lg:flex flex-col lg:flex-row justify-between w-full lg:items-center lg:pr-10 py-4 lg:py-0`}
        >
          <div className="flex  flex-col lg:flex-row">
            <a
              href="/"
              className="block text-white hover:text-gray-200 px-4 py-3 lg:py-5"
            >
              Blog
            </a>
            <a
              href="/"
              className="block text-white hover:text-gray-200 px-4 py-3 lg:py-5"
            >
              Gallery
            </a>
            <a
              href="/"
              className="block text-white hover:text-gray-200 px-4 py-3 lg:py-5"
            >
              About
            </a>
          </div>
          <div className="flex  flex-col lg:flex-row">
            <a
              href="/"
              className="block text-white hover:text-gray-200 px-4 py-3 lg:py-5"
            >
              Sign In
            </a>
            <a
              href="/"
              className="block text-white hover:text-gray-200 px-4 py-3 lg:py-5"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
