import { useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Pagination } from "antd";

const ProductList = ({ dataList, homeContent = false, pageSize, totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDataList = dataList.slice(startIndex, endIndex);

  return (
    <div className="product-list-container">
      {homeContent ? (
        <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
      ) : null}
      <div className="row">
        {currentDataList.map((data) => (
          <Product data={data} key={data.id} />
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
