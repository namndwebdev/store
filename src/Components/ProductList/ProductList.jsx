import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Pagination} from "antd"
import SkeletonLoad from "./SkeletonLoad";
const ProductList = (dataListProduct) => {
  const [dataList, setDataList] = useState()
  const [pageSize, setpageSize] = useState([])
  const test = (dataListProduct.dataListProduct)
  function getListCategoriesFromListProduct(e){
    return e.map((item)=>{
        return item.attributes.idCategories?item.attributes.idCategories.data.map((item)=>{
            return item.attributes.slug
        }):[]
    })
}
const array = getListCategoriesFromListProduct(test)
const array2 = new Set(array.flat().filter(Boolean))
let url = 'https://backoffice.nodemy.vn/api/products?' 
function getProductInCategories5Latest(array2){
    array2.forEach((item,index)=>{
        return url += `filters[idCategories][slug][$contains]=${item}&`
    })
}

getProductInCategories5Latest(array2)
let lastUrl = url + 'sort[0]=updatedAt%3Adesc&populate=*'
console.log(lastUrl);
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?pagination[page]=1&pagination[pageSize]=4&populate=*`)
    .then((res) => res.json())
    .then((res) => {
      setDataList(res.data);
    })
  }, [])
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?populate=*`)
    .then((res) => res.json())
    .then((res) => {
      setpageSize(res.data);
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
      {dataList ? <Pagination total={pageSize.length} pageSize={4} onChange={handleChangePage} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} /> : null}
    </div>
  );
};

export default ProductList;