import "./ProductDetail.css";
import { Divider, Typography, Button, Tabs, Col, Row } from "antd";
import { React,useEffect, useState  } from "react";
import CarouselGlobal from "../../Components/ProductDetail/CarouselGlobal";
import NavBreadcrums from "../../Components/NavBreadcrums/NavBreadcrums";
import { useParams} from 'react-router-dom'
import ProductDetail_infor from "./ProductDetail_infor";
const { Text } = Typography;

export default function ProductDetail() {
  let {id} = useParams()
  let [product,setProduct]=useState(null)
  let [imageList,setImageList]=useState([])
  const items = [
    {
      key: "1",
      label: `Mô tả sản phẩm`,
      children: product ? <ProductDetail_infor description={product.description} cpu={product.cpu} ram={product.ram}/> : "",
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
              console.log(data.data.attributes);
              setProduct(data.data.attributes)
              // const imageCarousel = data.data.attributes.image.data.map(x=>({image:x.attributes.url}))
              // console.log(imageCarousel);
              // setImageList(imageCarousel)
          })
  }, [])

  return (
    <> 
    {/* BreadCrumbs */}'
    { product ? <NavBreadcrums nameProduct={product.name} nameBrand={ product.idBrand && product.idBrand.data.attributes.name} /> :null}
     
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
                {/* Carousel */}
                <CarouselGlobal hasImage={true} data={imageList} ></CarouselGlobal>            
              </div>
            </Col>
            <Col span={12}>
              <div className="detail_top_left">
                { product ?<Typography.Title level={2}>
                {product.name}  
                </Typography.Title> : null}
                <p> Hãng sản xuất : APPLE </p>
                <p> Bảo hành : 12 tháng </p>
                <Divider />
                <Divider />
                {product ?<Typography.Title level={2} type="danger" underline>
                  <span className="Discount">
                    Ưu đãi đặc biệt khi mua kèm {product.name}:
                  </span>
                </Typography.Title> :null}
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
                    {product? <Text delete>{product.oldPrice}₫</Text> :null}
                  </span>
                </p>
                <p>
                  <span>Giá KM : </span>
                  <span>
                   { product ? <Text strong type="danger">
                    {product.price }₫
                    </Text> : null}
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
