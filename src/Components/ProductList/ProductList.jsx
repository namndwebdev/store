import React, { useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ dataList }) => {
  return (
    <div className="product-list-container">
      <div className="row">
        <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
        <Product data={dataList}></Product>
      </div>
      {/* <div className="row">
        <h2 className="product-list__title">LAPTOP GAMING BÁN CHẠY</h2>
        <Product data={dataList}></Product>
      </div>      
      <div className="row">
        <h2 className="product-list__title">LAPTOP BÁN CHẠY</h2>
        <Product data={dataList}></Product>
      </div> */}

    </div>

  );
};

export default ProductList;
