import React from "react";

export default function Success(props) {
  return (
    <div className="mr-4">
      <button className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 text-white rounded inline-flex items-center justify-center px-4 h-10 leading-none">
        {props.children}
      </button>
    </div>
  );
}
