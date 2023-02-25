import "./ProductDetail.css";
import { Divider, Typography, Button, Tabs, Col, Row } from "antd";
import InforProduct from "./ProductDetail_infor";
import { React } from "react";
import CarouselGlobal from "../../Components/ProductDetail/CarouselGlobal";

const { Text } = Typography;
const items = [
  {
    key: "1",
    label: `Mô tả sản phẩm`,
    children: <InforProduct />,
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
export default function ProductDetail() {
  return (
    <>
      <div className="detail">
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
                <CarouselGlobal hasImage={true}></CarouselGlobal>
              </div>
            </Col>
            <Col span={12}>
              <div className="detail_top_left">
                <Typography.Title level={2}>
                  MacBook Pro 13 M1 8GB 256GB - Grey
                </Typography.Title>
                <p> Hãng sản xuất : APPLE </p>
                <p> Bảo hành : 12 tháng </p>
                <Divider />
                <Divider />
                <Typography.Title level={2} type="danger" underline>
                  <span className="Discount">
                    Ưu đãi đặc biệt khi mua kèm MACBOOK:
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
                    <Text delete>34,990,000₫</Text>
                  </span>
                </p>
                <p>
                  <span>Giá KM : </span>
                  <span>
                    <Text strong type="danger">
                      30,590,000₫
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
