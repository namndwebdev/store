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
import ReactPaginate from "react-paginate";

export default function Home() {
  let [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * perPage;
  const currentData = data.slice(offset, offset + perPage);

  return (
    <>
      <Header></Header>
      <Baner></Baner>
      <ProductList
        dataList={currentData}
        homeContent={true}
        pageSize={perPage}
        totalItems={data.length}
      ></ProductList>
      <ProductList
        dataList={currentData}
        homeContent={true}
        pageSize={perPage}
        totalItems={data.length}
      ></ProductList>
      <ReactPaginate
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / perPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}
