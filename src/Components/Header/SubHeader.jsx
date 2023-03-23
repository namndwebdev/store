import React, { useState, useEffect } from "react";
import {
  UilBars,
  UilBill,
  UilWrench,
  UilTruck,
} from "@iconscout/react-unicons";
import MegaMenu from "../../Pages/Menu/MegaMenu";

const SubHeader = ({ data }) => {
  const [dataMega, SetDataMega] = useState([]);
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);
  const [isShowListMenu, setIsShowListMenu] = useState(false);

  useEffect(() => {
    fetch(
      "https://backoffice.nodemy.vn/api/dropdown-tabs?populate[0]=section&populate[1]=section.image&populate[2]=section.link"
    )
      .then((res) => res.json())
      .then((data) => {
        SetDataMega(data.data);
      });
  }, []);

  return (
    <>
      <div className="sub-header__background">
        <div style={{ height: "10px" }}></div>
        <div className="sub-header">
          <span
            className="sub-header__menu"
            onMouseEnter={() => setIsShowMenuItem(true)}
            onMouseLeave={() => setIsShowMenuItem(false)}
          >
            <UilBars></UilBars>Danh mục sản phẩm
          </span>
          <span>
            {data &&
              data.length > 0 &&
              data[2].attributes.menuheader.link.map((item, index) => {
                return (
                  <a href="#" className="header-a__color">
                    <span
                      className="bottom-header__icon"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    {item.label}
                  </a>
                );
              })}
          </span>
        </div>
      </div>
      {isShowMenuItem && (
        <div
          onMouseEnter={() => setIsShowMenuItem(true)}
          onMouseLeave={() => setIsShowMenuItem(false)}
        >
          <MegaMenu />
        </div>
      )}
    </>
  );
};

export default SubHeader;
