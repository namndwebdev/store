import React, { useEffect } from "react";
import "./NavBreadcrums.css";
import { useLocation, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import BreadcrumbItem from "../Button/Button";
import Icon, { RightOutlined } from '@ant-design/icons';
import { useState } from "react";

export default function Breadcrumbs({nameProduct , nameBrand }) {
  // const[dataBread, setDataBread] = useState([])

  // useEffect(()=>{
  //   fetch(`https://backoffice.nodemy.vn/api/products/4?populate=*`)
  //     .then((res) => res.json())
  //     .then((data) =>{   
                  
  //        setDataBread(data.data.attributes)
  //        console.log("hiep1");
  //        console.log(dataBread);

  //       //  console.log(data.data.attributes.name);//product name
  //       //  console.log(data.data.attributes.idBrand.data.attributes.name);//brand product
  //         })
  // },[])


  // const location = useLocation();
 

  // let currentLink = "";
  // console.log(location);
  // const crumbs = location.pathname;

  // .split("/")
  // .filter((crumb) => crumb !== "")
  // .map((crumb) => {
  //   currentLink += `/${crumb}`;
  //   return (
  //     <div className="crumb" key={crumb}>
  //       <Link to={currentLink}>{crumb}</Link>
  //     </div>
  //   );
  // });

  return (
    <div className="breadcrumbs">
      <span>Bạn đang ở:</span>
      <Link to='/'> Trang chủ</Link>
       <RightOutlined /> 
       <Link to="/" key={nameProduct}> {nameBrand} </Link> 
       <RightOutlined /> 
       <span key={nameProduct}> {nameProduct} </span>      
    </div>
  );
}
