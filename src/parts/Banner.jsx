import React, { useState } from "react";
import payOnline from "../assets/image/pay-online.png";
import Button from "../components/Button";

import Container from "../components/Container";

export default function Slider(props) {
  const { data } = props;
  console.log(data);

  const nextSlide = document.querySelector("#img-banner");
  const bannerTitle = document.querySelector("#banner-title");
  const bannerDesc = document.querySelector("#banner-desc");

  let i = 0;

  const change = (index) => {
    return new Promise((resolve, reject) => {
      console.log(index);
      const nextSlide = document.querySelector("#img-banner");
      const bannerTitle = document.querySelector("#banner-title");
      const bannerDesc = document.querySelector("#banner-desc");

      nextSlide.classList.add("opacity-0");
      bannerTitle.classList.add("opacity-0");
      bannerDesc.classList.add("opacity-0");

      nextSlide.src = data.feature[index].imgUrl;
      bannerTitle.innerHTML = data.feature[index].title;
      bannerDesc.innerHTML = data.feature[index].description;

      setTimeout(() => {
        resolve();
      }, 300);
    });
  };

  const slideRight = async (e) => {
    i++;
    if (i >= data.feature.length) i = 0;
    const next = await change(i).then(() => {
      const nextSlide = document.querySelector("#img-banner");
      const bannerTitle = document.querySelector("#banner-title");
      const bannerDesc = document.querySelector("#banner-desc");

      nextSlide.classList.add("animate-fade");
      bannerTitle.classList.add("animate-fade");
      bannerDesc.classList.add("animate-fade");
      setTimeout(() => {
        nextSlide.classList.remove("opacity-0");
        nextSlide.classList.remove("animate-fade");

        bannerTitle.classList.remove("opacity-0");
        bannerTitle.classList.remove("animate-fade");

        bannerDesc.classList.remove("opacity-0");
        bannerDesc.classList.remove("animate-fade");
      }, 300);
    });
  };

  const slideLeft = async (e) => {
    i--;
    if (i <= -1) i = data.feature.length - 1;

    const next = await change(i).then(() => {
      const nextSlide = document.querySelector("#img-banner");
      const bannerTitle = document.querySelector("#banner-title");
      const bannerDesc = document.querySelector("#banner-desc");

      nextSlide.classList.add("animate-fade");
      bannerTitle.classList.add("animate-fade");
      bannerDesc.classList.add("animate-fade");
      setTimeout(() => {
        nextSlide.classList.remove("opacity-0");
        nextSlide.classList.remove("animate-fade");

        bannerTitle.classList.remove("opacity-0");
        bannerTitle.classList.remove("animate-fade");

        bannerDesc.classList.remove("opacity-0");
        bannerDesc.classList.remove("animate-fade");
      }, 300);
    });
  };

  return (
    <Container className="mt-24">
      <div className="flex flex-row items-center -mx-4 pb-28 px-4">
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

        <div className=" flex bg-blueSecondary rounded-3xl items-center">
          <div className="w-6/12">
            <img
              src={data.feature[0].imgUrl}
              alt={data.feature[0].title}
              className="w-full "
              id="img-banner"
            />
          </div>
          <div className="w-1/12 px-4"></div>
          <div className="w-5/12 px-8">
            <h3 className="text-4xl font-bold mb-6" id="banner-title">
              {data.feature[0].title}
            </h3>
            <p
              className="text-gray-500 text-xl leading-relaxed mb-7 font-body"
              id="banner-desc"
            >
              {data.feature[0].description}
            </p>
            <Button.Primary>Mulai Belanja</Button.Primary>
          </div>
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
