import React, { useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ dataList }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
    <div className="row">
      {dataList.map((data) => (
        <Product data={data}></Product>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
