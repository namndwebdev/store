import React from 'react'
import { Breadcrumb } from 'antd';
import "./NavBreadcrums.css"

export default function NavBreadcrums() {
  return <>
        <Breadcrumb separator="" className='Title_breadcrums'>
    <Breadcrumb.Item >Bạn đang ở</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href=""> Trang chủ</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href=""> Apple </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>MacBook Pro 13 M1 8GB 256GB - Grey</Breadcrumb.Item>
  </Breadcrumb>
    </>
  
}
