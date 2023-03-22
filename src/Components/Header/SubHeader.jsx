import React from "react";
import {
  UilBars
} from "@iconscout/react-unicons";

const SubHeader = ({ data }) => {
  return <>
    <div className='sub-header__background'>
      <div style={{ height: '10px' }}></div>
      <div className='sub-header store-container'>
        <span className='sub-header__menu'><UilBars></UilBars>Danh mục sản phẩm</span>
        <span>
          { data && data.length > 0 && data[2].attributes.menuheader.link.map((item, index) => {
            return <a href='#' className='header-a__color'><span className='bottom-header__icon' dangerouslySetInnerHTML={{__html:item.icon}}/>
            {item.label}</a>
            
          }) }
        </span>
        {/* <span className='sub-header__menu'><UilBars></UilBars>Danh mục sản phẩm</span>
        <a href='#' className='header-a__color'><UilBill className='sub-header__icons' style={{marginLeft:''}}></UilBill> HƯỚNG DẪN THANH TOÁN</a>
        <a href='#' className='header-a__color'><UilBill className='sub-header__icons'></UilBill> HƯỚNG DẪN TRẢ GÓP</a>
        <a href='#' className='header-a__color'><UilWrench className='sub-header__icons'></UilWrench> CHÍNH SÁCH BẢO HÀNH</a>
        <a href='#' className='header-a__color'><UilTruck className='sub-header__icons'></UilTruck>CHÍNH SÁCH VẬN CHUYỂN</a> */}
          </div>
        </div>
    </>
};

export default SubHeader;
