import React from 'react'
import {UilBars} from '@iconscout/react-unicons'

export const SubHeader = () => {
  return <div className='sub-header'>
    <span className='sub-header__menu'><UilBars></UilBars>Danh mục sản phẩm</span>
    <a href='#' className='header-a__color'>HƯỚNG DẪN THANH TOÁN</a>
    <a href='#' className='header-a__color'>HƯỚNG DẪN TRẢ GÓP</a>
    <a href='#' className='header-a__color'>CHÍNH SÁCH BẢO HÀNH</a>
    <a href='#' className='header-a__color'>CHÍNH SÁCH VẬN CHUYỂN</a>
  </div>
}
