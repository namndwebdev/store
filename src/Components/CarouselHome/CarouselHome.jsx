import React from "react";
import CarouselGlobal from "../Carousel/CarouselGlobal";
import './CarouselHome.css'
import { useEffect, useState } from 'react'
function CarouselHome() {
  const [dataImg, setDataImg] = useState([])

  useEffect(() => {
      const callAPI = () => {
          fetch('https://backoffice.nodemy.vn/api/homepage?populate=*')
              .then(res => res.json())
              .then((data) => {
                const listLink = []
                    data.data.attributes.leftBanner.data.map((item) => {
                    let imgLink = `${process.env.REACT_APP_LINK_BACK_END}${item.attributes.url}`
                    listLink.push(imgLink)
                  })
                  setDataImg(listLink)
              })
      }
      callAPI()
  }, [])
  return (
    <>
      <CarouselGlobal hasImage={false} data={dataImg}  ></CarouselGlobal>
    </>
  );
}

export default CarouselHome;
