import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "../Category/Category.css";
import Product from "../Product/Product";
import ProductList from "../ProductList/ProductList";
export default function Category() {
  let [productList, setProductList] = useState([]);
  let { name}  = useParams();
  useEffect(() => {
    fetch(
      `https://backoffice.nodemy.vn/api/products?filters[idCategories][name][$eq]=${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProductList(res.data);
      });
  }, []);

  return (
    <div>
      <div className="">
        <div className="container">
        <h2 className="fs-2 text mt-2 mb-2 fw-normal">Laptop Gaming Acer</h2>
        <div className="mt-2 mb-2">Bạn đang ở: Trang chủ <i class="bi bi-arrow-right-circle-fill"></i> Laptop Gaming Acer chính hãng, giá tốt nhất</div>
        <div className="row">
        <ProductList data={productList} className="category-content"></ProductList>
        </div>
      </div>
      </div>
    </div>
  );
}
