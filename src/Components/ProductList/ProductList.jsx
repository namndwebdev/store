import React, { useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ dataList, homeContent = false }) => {
  return (
    
    <div className="product-list-container">
      {homeContent ? <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2> : null}
    <div className="row">
      {dataList.map((data) => (
        <Product data={data}></Product>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
