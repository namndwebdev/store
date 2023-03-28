import ProductBlogList from "../../Components/ProductBlogList/ProductBlogList";
import ProductList from "../../Components/ProductList/ProductList";
import Baner from "../Menu/Baner";
import { useEffect, useState } from "react";

export default function Home() {
  let [dataListProduct, setDataListProduct] = useState([]);

  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setDataListProduct(res.data);
      });
  }, []);
  return (
    <>
      <Baner></Baner>
      <ProductList dataListProduct={dataListProduct}></ProductList>
      <ProductBlogList></ProductBlogList>
    </>
  );
}