import Slider from "react-slick";
import "./CarouselGlobal.css";
import Icon, { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { React } from "react";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftOutlined style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightOutlined style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

export default function CarouselVer2({ hasImage = true, data, ...props }) {
console.log(data);

  let carouselHome = <Slider
    autoplay
    autoplaySpeed={1700}
    dots
    initialSlide={1}
    infinite
    prevArrow={<PreviousBtn />}
    nextArrow={<NextBtn />}
    dotsClass="slick-dots custom-indicator"
  >
    {data && data.map((item) => (
      <div key={Math.random()}>
        <img src={item} alt="" style={{ width: "100%", height: "45vh", objectFit: "contain" }} />
      </div>
    ))}
  </Slider>

  let carouselDetail = <Slider
    autoplay
    autoplaySpeed={1500}
    dots
    initialSlide={1}
    infinite
    prevArrow={<PreviousBtn />}
    nextArrow={<NextBtn />}
    customPaging={(i) => {
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={data[i]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>
      );
    }}

    dotsClass="slick-dots custom-indicator"
  >
    {data && data.map((item) => (
      <div key={Math.random()}  >
        <img src={item} alt="" style={{ width: "100%", height: "45vh", objectFit: "contain" }} />
      </div>
    ))}
  </Slider>
  return <>
    <div style={{ margin: "0 auto", width: '100%', height: "50px" }} className="carousel">
      {data && data.length > 0 ? (hasImage ? carouselDetail : carouselHome) : carouselHome}
    </div>

  </>
}



