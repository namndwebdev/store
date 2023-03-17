import ProductList from "../../Components/ProductList/ProductList";
import { useState } from "react";
import MegaMenu from "../Menu/MegaMenu";
import Header from "../../Components/Header/Header";
import Breadcrumbs from "../../Components/NavBreadcrums/NavBreadcrums";
import Baner from "../Menu/Baner";
import SubHeader from "../../Components/Header/SubHeader";
import { Footer } from "antd/es/layout/layout";
import { useEffect } from "react";
import FooterMenu from "../Menu/FooterMenu";

export default function Home() {
  let [data, setData] = useState([]);

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
      <Baner></Baner>
      <ProductList dataList={data}></ProductList>
      <ProductList dataList={data}></ProductList>

    </>
  );
}
