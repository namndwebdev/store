
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'

const Layout = () => {
  return <>
    <Header></Header>
    <SubHeader></SubHeader>
      <Outlet></Outlet>
    <Footer></Footer>
  </>
}

export default Layout
