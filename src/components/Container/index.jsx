import React from "react";
import propTypes from "prop-types";

export default function Container(props) {
  let className = [props.className];

  return (
    <div className={`container px-6 md:px-10 ${className.join(" ")}`}>
      {props.children}
      {/* <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="bg-gray-500">&nbsp;</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="bg-gray-600">&nbsp;</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="bg-gray-700">&nbsp;</div>
        </div>
      </div> */}
    </div>
  );
}

Container.propTypes = {
  className: propTypes.string,
};
