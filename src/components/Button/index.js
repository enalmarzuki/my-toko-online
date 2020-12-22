import React from "react";

const Primary = (props) => {
  return (
    <div className="mr-4">
      <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-white rounded 2xl:rounded-lg px-4 h-8 xl:px-6 xl:h-12 inline-flex items-center justify-center leading-none font-bold text-xs xl:text-base">
        {props.children}
      </button>
    </div>
  );
};

const Secondary = (props) => {
  return (
    <div className="mr-4">
      <button className="bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 text-white rounded inline-flex items-center justify-center px-4 h-10 leading-none">
        {props.children}
      </button>
    </div>
  );
};

const Success = (props) => {
  return (
    <div className="mr-4">
      <button className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 text-white rounded inline-flex items-center justify-center px-4 h-10 leading-none">
        {props.children}
      </button>
    </div>
  );
};

const Button = {
  Primary,
  Secondary,
  Success,
};

export default Button;
