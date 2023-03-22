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
    <div className="">
      <Header></Header>
      <div className="container">
        
        <ProductList dataList={productList}></ProductList>
      </div>
    </div>
  );
}
