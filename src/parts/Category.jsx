import React from "react";
import Slider from "../components/Slider";
import TitleSection from "./TitleSection";

export default function Category(props) {
  const { data } = props;

  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <TitleSection title={item.title} desc={item.description} />
            <Slider
              idSlide={item.id}
              data={item.items}
              isAllCategory={item.isAllCategory}
            />
          </div>
        );
      })}
    </>
  );
}
