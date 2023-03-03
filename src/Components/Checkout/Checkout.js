import React from "react";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col, Form, Input, Select, Button } from "antd";
import "./Checkout.css";
import dataProvince from "../Checkout/Data/province.json";
import dataDistrict from "../Checkout/Data/districts.json";
import dataWrad from "../Checkout/Data/wards.json";
export default function Checkout() {
  const [loadings, setLoadings] = useState([]);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState('Chọn Quận / Huyện');
  const [ward, setWard] = useState('Chọn Phường / Xã');
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  const provinceOrigin = dataProvince.map((item) => {
    return { label: item.name, value: item.code };
  });

  const getDistrictsOfProvince = (CityCode) => {
        let data = dataDistrict.filter((item) => {
        return item.parentCode  == CityCode
    })
    return data.map((item) => {
        return { label: item.name, value: item.code , parentCode:item.parentCode}
    })
  }

  const getWardOfDistrict = (CityCode) => {
    let data = dataWrad.filter((item) => {
    return item.parentCode  == CityCode
})
return data.map((item) => {
    return { label: item.name, value: item.code , parentCode:item.parentCode}
})
}
  return (
    <div className="Checkout-container">
      <Row>
        <Col span={12} className="Checkout-left">
          <h1>GEARVN.COM</h1>
          <ul>
            <li>
              <a>Giỏ hàng</a>
            </li>
            <li>></li>
            <li>Thông tin giao hàng</li>
          </ul>
          <p>Thông tin giao hàng</p>
          <p>Bạn đã có tài khoản?</p>
          <a>Đăng nhập</a>
          <Form>
            <Form.Item
              name="username"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên",
                },
              ]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>
            {/* Email and Phone Number  */}
            <Row gutter={8}>
              <Col span={18}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Email không hợp lệ",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Số điện thoại không được để trống",
                    },
                  ]}
                >
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
            </Row>
            {/* Địa chỉ  */}
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Địa chỉ không được trống",
                },
              ]}
            >
              <Input placeholder="Địa chỉ" />
            </Form.Item>
            {/* Select Tỉnh Thành Phố  */}
            <Row>
              <Col span={8}>
                <Form.Item>
                  <Select
                    defaultValue="Chọn tỉnh / thành"
                    options={provinceOrigin}
                    onChange={(value) => {
                      setProvince(value);
                      setDistrict('Chọn Quận / Huyện')
                      setWard('Chọn Phường / Xã')
                    }}
                        />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    value={district}
                    options={getDistrictsOfProvince(province)}
                    onChange={(value) => {
                        setDistrict(value)
                        setWard('Chọn Phường / Xã')
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    value={ward}
                    options={getWardOfDistrict(district)}
                    onChange={(value) => {
                        setWard(value)
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <h2>Phương thức vận chuyển</h2>
            <Input placeholder="Giao hàng tận nơi"></Input>
            <h2>Phương thức thanh toán</h2>
            <p>Thanh toán khi giao hàng (COD)</p>
            <p>
              Là phương thức khách hàng nhận hàng mới trả tiền. Áp dụng với tất
              cả các đơn hàng trên toàn quốc
            </p>
            <Row>
              <Col span={12}>
                <a>Giỏ hàng</a>
              </Col>
              <Col span={12}>
                <Button type="primary" htmlType="submit">
                  Hoàn tất đơn hàng
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={12} className="Checkout-right">
          <Row>
            <Col span={8}>
              <img
                src="https://toigingiuvedep.vn/wp-content/uploads/2022/03/hinh-nen-nguoi-nhen-chibi-cute-cho-dien-thoai.jpg"
                style={{ width: "70px", height: "70px" }}
                alt="Sản phẩm"
              ></img>
            </Col>
            <Col span={8}>
              <p>Tên sản phẩm</p>
            </Col>
            <Col span={8}>
              <p>Giá tiền</p>
            </Col>
          </Row>
          <div className="separate"></div>
          <Row>
            <Col span={18}>
              <Input placeholder="Mã giảm giá"></Input>
            </Col>
            <Col span={6} style={{ display: "flex", justifyContent: "right" }}>
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                loading={loadings[1]}
                onClick={() => enterLoading(1)}
              >
                Sử dụng
              </Button>
            </Col>
          </Row>
          <div className="separate"></div>
          <div className="check-total">
            <div className="check-total__item">
              <p>Tạm Tính</p>
              <p>Phí vận chuyển</p>
            </div>
            <div className="check-total__item">
              <p>Giá</p>
              <p>?</p>
            </div>
          </div>
          <div className="separate"></div>
          <div className="total">
            <p>Tổng cộng</p>
            <p>???????????</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
