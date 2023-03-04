import "./ProductDetail.css";
import { Divider, Typography, Button, Tabs, Col, Row } from "antd";
import InforProduct from "./ProductDetail_infor";
import { React,useEffect, useState  } from "react";
import CarouselGlobal from "../../Components/ProductDetail/CarouselGlobal";
import NavBreadcrums from "../../Components/NavBreadcrums/NavBreadcrums";
import { useParams} from 'react-router-dom'
const { Text } = Typography;

export default function ProductDetail() {
  let {id} = useParams()
  let [product,setProduct]=useState([])
  let [imageList,setImageList]=useState([])
  const items = [
    {
      key: "1",
      label: `Mô tả sản phẩm`,
      children: <InforProduct description={product.description} cpu={product.cpu} ram={product.ram}/>,
    },
    {
      key: "2",
      label: `Đặc điểm nổi bật`,
      children: `Táo xịn`,
    },
    {
      key: "3",
      label: `Thông tin bảo hành`,
      children: `Bảo hành trọn đời`,
    },
  ];
  useEffect(()=>{
      fetch(`https://backoffice.nodemy.vn/api/products/${id}?populate=*`)
      .then(res => res.json())
      .then(data =>{             
              setProduct(data.data.attributes)
              const imageCarousel = data.data.attributes.image.data.map(x=>({image:x.attributes.url}))
              setImageList(imageCarousel)
          })
  }, [])
  return (
    <> 
    <NavBreadcrums/>
      <div className="detail"  >
        {/* DETAIL TOP */}
        <div className="detail_top" style={{ margin: "5px" }}>
          <Row>
            <Col span={12}>
              <div
                className="detail_top_right"
                style={{
                  width: "90%",
                  margin: "0px ",
                  height: "100%",
                  backgroundColor: "white",
                }}
              >
                <CarouselGlobal hasImage={true} data={imageList} ></CarouselGlobal>
              
              </div>
            </Col>
            <Col span={12}>
              <div className="detail_top_left">
                <Typography.Title level={2}>
                {product.name}  
                </Typography.Title>
                <p> Hãng sản xuất : APPLE </p>
                <p> Bảo hành : 12 tháng </p>
                <Divider />
                <Divider />
                <Typography.Title level={2} type="danger" underline>
                  <span className="Discount">
                    Ưu đãi đặc biệt khi mua kèm {product.name}:
                  </span>
                </Typography.Title>
                <li>
                  Mua kèm màn hình giảm sốc lên đên 49% (
                  <a href="">xem chi tiết</a> ).
                </li>
                <li>
                  Mua kèm các sản phẩm khác giảm giá lên đến 56% (
                  <a href="">xem chi tiết</a> ).
                </li>
                <li>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.</li>
                <p>
                  <span>Giá Cũ : </span>
                  <span>
                    <Text delete>{product.oldPrice}₫</Text>
                  </span>
                </p>
                <p>
                  <span>Giá KM : </span>
                  <span>
                    <Text strong type="danger">
                      ₫
                    </Text>
                  </span>
                </p>
                <Button type="primary" size="large" danger>
                  Đặt hàng
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        {/* DETAIL CENTER */}
        <div className="detail_tab">
          <Tabs
            defaultActiveKey="1"
            type="card"
            size="middle"
            items={items}
          ></Tabs>
        </div>
      </div>

    </>
  );
}
