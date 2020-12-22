import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import hero from "../assets/image/hero.png";

export default function Hero(props) {
  return (
    <Container className="mt-12">
      <div className="flex flex-wrap -mx-4 md:items-center">
        <div className="w-full sm:w-1/2 lg:w-5/12 px-4">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold font-body mb-4 xl:leading-tight lg:-mt-36 2xl:-mt-48">
            Toko Online <span className="text-blue-500">Terbaik</span> Yang Ada
            Di <span className="text-secondary">Indonesia</span>.
          </h1>
          <p className="text-gray-500 text-sm xl:text-2xl leading-relaxed mb-5 2xl:mb-9 font-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            neque. Ad, minima voluptas? Cupiditate beatae veniam consectetur
            animi nihil.
          </p>
          <Button.Primary>Mulai Belanja</Button.Primary>
        </div>

        <div className="w-full sm:w-1/2 lg:w-7/12 px-4">
          <img src={hero} alt="Illustrasi-hero" />
        </div>
      </div>
    </Container>
  );
}
