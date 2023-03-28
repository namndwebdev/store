import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Pagination} from "antd"
import SkeletonLoad from "./SkeletonLoad";
const ProductList = () => {
  const [dataList, setDataList] = useState()
  const [pageSize, setpageSize] = useState([])
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?pagination[page]=1&pagination[pageSize]=4&populate=*`)
    .then((res) => res.json())
    .then((res) => {
      setDataList(res.data);
      setpageSize(res.meta.pagination.total)
    })
  }, [])

  const handleChangePage = (page, pageSize) => {
    fetch(`https://backoffice.nodemy.vn/api/products?pagination[page]=${page}&pagination[pageSize]=4&populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setDataList(res.data);
      })
  };
  return (
    <div className="product-list-container">
      <div className="row">
        <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
        {dataList ? dataList.map(data => <Product data={data}></Product>) : <SkeletonLoad></SkeletonLoad>}
      </div>
      {dataList ? <Pagination total={pageSize} pageSize={4} onChange={handleChangePage} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} /> : null}
    </div>
  );
};

export default ProductList;