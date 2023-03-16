import ProductList from "../../Components/ProductList/ProductList";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import Baner from "../Menu/Baner";
import { useEffect } from "react";

export default function Home() {
  let [data, setData] = useState([]);
  let count = 1;
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);
  return (
    <>
      <Header></Header>
      <Baner></Baner>
      <ProductList dataList={data}></ProductList>
    </>
  );
}
