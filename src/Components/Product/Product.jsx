import React from "react";
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
        <div className="col-3">
          <div className="card text-start m-2">
            <img
              className="card-img-top"
              src={`https://backoffice.nodemy.vn${data?.attributes?.image?.data[0].attributes.url}`}
              alt=""
            />
            <div className="card-body">
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
