import { useState } from "react";
import ProductList from "../../Components/ProductList/ProductList";
import Baner from "../Menu/Baner";

export default function Home() {
  let [data, setData] = useState([]);
  let count = 1;
  return (
    <>
    
      <Baner></Baner>
      <ProductList></ProductList>
    </>
  );
}
