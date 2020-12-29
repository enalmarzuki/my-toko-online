import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <div className="flex flex-wrap -mx-4 mb-24">
        <div className="w-full lg:w-4/12 px-4">
          <Link to="/" className="text-3xl font-bold ">
            <span className="text-blue-500">Online</span>Shop.
          </Link>
          <p className="text-gray-500 mt-4 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            architecto, vero amet officiis corporis voluptates?
          </p>
        </div>
        <div className="hidden lg:flex lg:w-2/12 lg:px-4"></div>
        <div className="w-full lg:w-3/12 px-4 mt-10 lg:mt-0">
          <p className="font-body text-2xl font-bold mb-3">Build Using</p>
          <p className="font-body text-gray-500 text-xl mb-2">React JS</p>
          <p className="font-body text-gray-500 text-xl">Tailwind CSS</p>
        </div>
        <div className="w-full lg:w-3/12 px-4 mt-10 lg:mt-0">
          <p className="font-body  text-2xl font-bold mb-3">Kontak Kami</p>
          <p className="font-body text-gray-500 text-xl mb-2">
            onlineshop@myshop.co.id
          </p>
          <p className="font-body text-gray-500 text-xl mb-2">0411 123 4321</p>
          <p className="font-body text-gray-500 text-xl">
            Makassar, Sulawesi Selatan
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4 pb-10">
        <div className="w-full px-4 justify-center">
          <p className="font-body text-xl mb-1 text-center text-gray-500">
            Copyright • 2020 All rights reserved • OnlineShop
          </p>
        </div>
      </div>
    </Container>
  );
}
