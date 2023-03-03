import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import './Checkout.css'
export default function Checkout() {
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
          <h2>Thông tin giao hàng</h2>
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
                    options={[
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    defaultValue="Chọn quận / huyện"
                    options={[
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    defaultValue="Chọn phường / xã "
                    options={[
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
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
          <Row>
            <Col span={18}>
                <Input placeholder="Mã giảm giá"></Input>
            </Col>
            <Col span={6}>
                <Button> Sử dụng</Button>
            </Col>
          </Row>
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
          <div className="total">
            <p>Tổng cộng</p>
            <p>???????????</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
