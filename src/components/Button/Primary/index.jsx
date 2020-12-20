import React from "react";

export default function Primary(props) {
  return (
    <div className="mr-4">
      <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-white rounded-lg  px-4 h-10 inline-flex items-center justify-center leading-none">
        {props.children}
      </button>
    </div>
  );
}
