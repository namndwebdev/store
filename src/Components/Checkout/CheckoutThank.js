import React from "react";
import "./CheckoutThank.css";
import { CheckSquareFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function CheckoutThank() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/checkout";
    navigate(path);
  };

  return (
    <div className="CheckoutThank-container">
      <div>
        <CheckSquareFilled />
        <h2>Cảm ơn bạn đã mua hàng tại GearVn</h2>
        <Button
          onClick={() => {
            routeChange();
          }}
        >
          Quay về trang thanh toán
        </Button>
      </div>
    </div>
  );
}
