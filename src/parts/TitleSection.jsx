import React from "react";
import propTypes from "prop-types";

import Container from "../components/Container";

export default function TitleSection(props) {
  const { title, desc } = props;
  return (
    <Container className="mt-40 mb-8 lg:mb-10">
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full md:w-5/12 lg:w-4/12 px-4">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold font-body mb-2 text-center">
            {title}
          </h1>
          <p className=" text-gray-500 text-sm xl:text-xl font-body text-center">
            {desc}
          </p>
        </div>
      </div>
    </Container>
  );
}

TitleSection.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
};
