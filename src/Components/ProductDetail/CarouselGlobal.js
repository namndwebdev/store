import { React } from "react";
import { Carousel } from "react-carousel-minimal";
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  width: "100%",
  height: "auto",
};
export default function CarouselGlobal({ hasImage = true, data, ...props }) {
  const dataImg = [
    {
      image: "https://product.hstatic.net/1000026716/product/1_8ecb12c659554e7186f5ad4636c4718c.jpg",
    },
    {
      image: "https://product.hstatic.net/1000026716/product/macbook_pro_13_m1_8gb_256gb_-_grey_91a325e5173c455c8642e34a072741aa.png",
    },
    {
      image: "https://product.hstatic.net/1000026716/product/2_93657bc06b224a50a126d3e6bdbd0e1b.jpg",
    },
    {
      image: "https://product.hstatic.net/1000026716/product/3_a4a190631a5a4f889ea5cf649f0f9707.jpg",
    },
    {
      image: "https://product.hstatic.net/1000026716/product/4_3cb242b2a3da4cf88a4fa793703e59ad.jpg",
    },
  ];
  return (
    <>
      {hasImage ? (
        <Carousel
          data={props.dataImage ? props.dataImage : dataImg}
          time={1500}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="15%"
          showNavBtn={true}
          style={{
            width: "100%",
            margin: "10px auto",
          }}
        />
      ) : (
        <Carousel
          data={dataImg}
          time={2000}
          width="850px"
          height="350px"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="contain"
          style={{
            width: "100%",
            margin: "10px auto",
          }}
        />
      )}
    </>
  );
}
