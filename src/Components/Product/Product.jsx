import React from "react";
import { Pagination } from "antd"
import { useState } from "react";
import './Product.css'
function Product({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentData = data.slice(start, end);

  const convertToVnd = (price) => {
    const VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(price);
  };
  const caculateSale = (oldPrice, newPrice) => {
    const salePercent = ((oldPrice - newPrice) / oldPrice) * 100;
    return `${Number.parseFloat(salePercent).toFixed(0)}%`;
  };
  return (
    <>{currentData.map((data) => {
      return <div className="col-3 product-home">
        <div className="card text-start m-2 card-item">
          <div className="card-img-top">
            <img src={`https://backoffice.nodemy.vn${data?.attributes?.image?.data[0].attributes.url}`}
              alt="">
            </img>
            <div className="card-mark d-flex justify-content-center align-items-center">
              <p >Click để xem chi tiết</p>
              <p>Đặt hàng</p>
            </div>

          </div>

          <div className="card-body">
            <div className="product-item-name fs-6">{data.attributes.name}</div>
            <div className="card-price">
              <div>
                <p className="oldprice">
                  {convertToVnd(data.attributes.oldPrice)}
                </p>
                <p className="saleprice">
                  {convertToVnd(data.attributes.price)}
                </p>
              </div>
              <div
                className="salepercent"
                style={{
                  backgroundImage: `url(https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png)`,
                }}
              >
                <span>
                  {caculateSale(
                    data.attributes.oldPrice,
                    data.attributes.price
                  )}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    })}
      <Pagination
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handleChangePage}
      />
    </>

  );
}

export default Product;
