import React from "react";
import Button from "../components/Button";

import Container from "../components/Container";

export default function Slider(props) {
  const { data } = props;

  let i = 0;

  const addOpacity = (nextSlide, bannerTitle, bannerDesc) => {
    nextSlide.classList.add("opacity-0");
    bannerTitle.classList.add("opacity-0");
    bannerDesc.classList.add("opacity-0");
  };

  const addAnimateFade = (nextSlide, bannerTitle, bannerDesc) => {
    nextSlide.classList.add("animate-fade");
    bannerTitle.classList.add("animate-fade");
    bannerDesc.classList.add("animate-fade");
  };

  const removeAnimFade = (nextSlide, bannerTitle, bannerDesc) => {
    nextSlide.classList.remove("opacity-0");
    nextSlide.classList.remove("animate-fade");

    bannerTitle.classList.remove("opacity-0");
    bannerTitle.classList.remove("animate-fade");

    bannerDesc.classList.remove("opacity-0");
    bannerDesc.classList.remove("animate-fade");
  };

  const change = (index, nextSlide, bannerTitle, bannerDesc) => {
    return new Promise((resolve, reject) => {
      addOpacity(nextSlide, bannerTitle, bannerDesc);

      nextSlide.src = data.feature[index].imgUrl;
      bannerTitle.innerHTML = data.feature[index].title;
      bannerDesc.innerHTML = data.feature[index].description;

      setTimeout(() => {
        resolve();
      }, 300);
    });
  };

  const slideRight = async (e) => {
    const nextSlide = document.querySelector("#img-banner");
    const bannerTitle = document.querySelector("#banner-title");
    const bannerDesc = document.querySelector("#banner-desc");

    i++;

    if (i >= data.feature.length) i = 0;

    await change(i, nextSlide, bannerTitle, bannerDesc).then(() => {
      addAnimateFade(nextSlide, bannerTitle, bannerDesc);
      setTimeout(() => {
        removeAnimFade(nextSlide, bannerTitle, bannerDesc);
      }, 300);
    });
  };

  const slideLeft = async (e) => {
    const nextSlide = document.querySelector("#img-banner");
    const bannerTitle = document.querySelector("#banner-title");
    const bannerDesc = document.querySelector("#banner-desc");

    i--;

    if (i <= -1) i = data.feature.length - 1;

    await change(i, nextSlide, bannerTitle, bannerDesc).then(() => {
      addAnimateFade(nextSlide, bannerTitle, bannerDesc);
      setTimeout(() => {
        removeAnimFade(nextSlide, bannerTitle, bannerDesc);
      }, 300);
    });
  };

  return (
    <Container className="mt-24">
      <div className="flex flex-row items-center -mx-4 pb-28 px-4">
        <button
          className="mr-2 lg:flex focus:outline-none rounded-full focus:ring-2 focus:ring-blue-300"
          onClick={slideLeft}
        >
          <svg
            className="bg-blue-400 hover:bg-blue-500 h-5 w-5 text-white rounded-full p-1  
            lg:h-7 lg:w-7"
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

        <div className="inline-block lg:flex bg-blueSecondary rounded-3xl items-center">
          <div className="w-full lg:w-6/12">
            <img
              src={data.feature[0].imgUrl}
              alt={data.feature[0].title}
              className="w-full "
              id="img-banner"
            />
          </div>
          <div className="hidden lg:w-1/12 px-4"></div>
          <div className="w-full lg:w-5/12 px-8 py-7">
            <h3
              className="text-2xl mb-3 lg:text-3xl xl:text-4xl font-bold lg:mb-6"
              id="banner-title"
            >
              {data.feature[0].title}
            </h3>
            <p
              className="text-gray-500 text-sm mb-4 lg:text-base xl:text-xl leading-relaxed lg:mb-7 font-body"
              id="banner-desc"
            >
              {data.feature[0].description}
            </p>
            <Button.Primary>Mulai Belanja</Button.Primary>
          </div>
        </div>

        <button
          className="ml-2 lg:flex focus:outline-none rounded-full focus:ring-2 focus:ring-blue-300"
          onClick={slideRight}
        >
          <svg
            className="bg-blue-400 hover:bg-blue-500 h-5 w-5 text-white rounded-full p-1 lg:h-7 lg:w-7"
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
