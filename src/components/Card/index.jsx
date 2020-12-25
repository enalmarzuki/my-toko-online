import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const { imgUrl, title, price, isAllCategory } = props;

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
    <div className="w-1/1 md:w-1/2 lg:w-4/12 xl:w-3/12 px-4 inline-flex">
      <div className="bg-white  rounded-xl overflow-hidden">
        <img src={imgUrl} alt="Terlaris" />
        <div className="py-8 px-6">
          <p className="font-semibold text-xl lg:text-2xl mb-3">{title}</p>
          <p className="text-base lg:text-xl text-gray-500 font-semibold">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  isAllCategory: propTypes.bool,
  title: propTypes.string,
  imgUrl: propTypes.string,
  price: propTypes.string,
};
