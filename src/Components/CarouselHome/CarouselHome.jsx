import React from "react";
import CarouselGlobal from "../Carousel/CarouselGlobal";
import './CarouselHome.css'
import { useEffect, useState } from 'react'
function CarouselHome() {
  const [imgLeft, SetImgLeft] = useState([])

  useEffect(() => {
      const callAPI = () => {
          fetch('https://backoffice.nodemy.vn/api/homepage?populate=*')
              .then(res => res.json())
              .then((data) => {
                const listLink = []
                  const arrayleft = data.data.attributes.leftBanner.data.map((item) => {
                    let imgLink = `${process.env.REACT_APP_LINK_BACK_END}${item.attributes.url}`
                    listLink.push(imgLink)
                  })
                  SetImgLeft(listLink)
              })
      }
      callAPI()
  }, [])
  return (
    <>
      <CarouselGlobal hasImage={false} data={imgLeft}  ></CarouselGlobal>
    </>
  );
}

export default CarouselHome;
