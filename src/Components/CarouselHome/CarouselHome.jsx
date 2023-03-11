import React from "react";
import CarouselGlobal from "../ProductDetail/CarouselGlobal";
import CarouselVer2 from "../ProductDetail/CarouselVer2";
import './CarouselHome.css'
function CarouselHome() {

  return (
    <>
      {/* <CarouselGlobal  hasImage={true} ></CarouselGlobal> */}
      <CarouselVer2  hasImage={false}  ></CarouselVer2>
    </>
  );
}

export default CarouselHome;
