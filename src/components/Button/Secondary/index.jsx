import React from "react";

export default function Secondary(props) {
  return (
    <div className="mr-4">
      <button className="bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 text-white rounded inline-flex items-center justify-center px-4 h-10 leading-none">
        {props.children}
      </button>
    </div>
  );
}
