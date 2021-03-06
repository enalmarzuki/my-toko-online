import React, { useState } from "react";
import Card from "../Card";

import Container from "../Container";

export default function Slider(props) {
  const { data, idSlide, ...other } = props;

  const slideRight = async (e) => {
    const sliderContainer = document.querySelector(`#${idSlide}`);
    sliderContainer.scrollLeft += 557;
  };

  const slideLeft = (e) => {
    const sliderContainer = document.querySelector(`#${idSlide}`);
    sliderContainer.scrollLeft -= 557;
  };

  // nullish coalescing javascript ( ?? )
  /* example 1 */
  // let value;
  // value = value ?? "Enal";
  // console.log(value);

  /* example 2 */
  // item.price ?? "";
  // console.log(data[0].price ?? "Ahay");

  return (
    <Container>
      <div className="flex items-center -mx-4 pb-28 px-4 overflow-y-visible">
        <button
          className="hidden lg:flex focus:outline-none rounded-full focus:ring-2 focus:ring-blue-300"
          onClick={slideLeft}
        >
          <svg
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-1  h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          className="w-full inline-block whitespace-nowrap overflow-x-scroll scroll  overflow-y-visible smooth-scroll shadowSlide"
          id={idSlide}
        >
          {data.map((item, i) => (
            <Card
              key={i}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price ?? ""}
              {...other}
            />
          ))}
        </div>
        <button
          className="hidden lg:flex focus:outline-none rounded-full focus:ring-2 focus:ring-blue-300"
          onClick={slideRight}
        >
          <svg
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-1  h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </Container>
  );
}
