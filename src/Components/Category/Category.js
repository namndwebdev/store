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
      `${process.env.REACT_APP_API}/products?filters[idCategories][name][$eq]=${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProductList(res.data);
      });
  }, []);

  return (
    <div className="">
      <div className="container">
        <ProductList dataList={productList}></ProductList>
      </div>
    </div>
  );
}
