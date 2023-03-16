import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";
import Baner from "../../Pages/Menu/Baner";
import "../Category/Category.css";
import Product from "../Product/Product";
export default function Category() {
  let [productList, setProductList] = useState([]);
  let { catId } = useParams();

  useEffect(() => {
    fetch(
      `https://backoffice.nodemy.vn/api/products?filters[idCategories][name][$eq]=${catId}&populate=*`
    )
      .then((res) => res.json())
      .then((res) => {
        setProductList(res.data);
      });
  }, []);
  return (
    <div className="">
      <Header></Header>
      <div className="container">
        <h2>Title</h2>
        <div>breadcum</div>
        <div>
        <Product data={productList} className="category-content"></Product>
        </div>
      </div>
    </div>
  );
}
