import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const { imgUrl, title, isAllCategory } = props;

  if (isAllCategory) {
    return (
      <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
        <div className="box-border bg-blueSecondary hover:bg-blue-400 rounded-3xl px-2 py-4 transition-all duration-300">
          <div className="lg:h-40 overflow-hidden flex items-center justify-center">
            <img
              src={imgUrl}
              alt={title}
              className="w-40 lg:w-auto transition-all duration-300 transform hover:scale-110"
            />
          </div>
          <p className="font-semibold text-xl text-center">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/1 lg:w-3/12 xl:w-3/12 px-4 inline-flex">
      <div className="box-border bg-blueSecondary hover:bg-blue-400 rounded-3xl px-2 py-4 transition-all duration-300">
        <div className="lg:h-40 overflow-hidden flex items-center justify-center">
          <img
            src={imgUrl}
            alt={title}
            className="w-40 lg:w-auto transition-all duration-300 transform hover:scale-110"
          />
        </div>
        <p className="font-semibold text-xl text-center">{title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  isAllCategory: propTypes.bool,
  title: propTypes.string,
  imgUrl: propTypes.string,
};
