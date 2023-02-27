import React from "react";
import CarouselGlobal from "./CarouselGlobal";
import './CarouselHome.css'
function CarouselHome() {
    const dataImage = [{
        image: "./CarouselHome-IMG/slideshow_1.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_2.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_3.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_4.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_5.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_6.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_7.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_8.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_9.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_10.webp",
      },
      {
        image: "./CarouselHome-IMG/slideshow_11.webp",
      },]
  return (
    <>
      <CarouselGlobal dataImage={dataImage} hasImage={false} data></CarouselGlobal>
    </>
  );
}

export default CarouselHome;
