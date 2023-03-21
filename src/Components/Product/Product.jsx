import React from "react";
import './Product.css';
import { Link } from "react-router-dom";

function Product({ data }) {
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
    <>
      <div className="col-3 product-home">
        <div className="card text-start m-2 card-item">
          <div className="card-img-top">
            <img src={`https://backoffice.nodemy.vn${data.attributes.image.data[0].attributes.url}`}
              alt="">
            </img>
            <div className="card-mark d-flex justify-content-center align-items-center">
              <Link to={`/product/${data.attributes.slug}`} style={{color:'white'}}>Click để xem chi tiết</Link>
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
    </>

  );
}

export default Product;
