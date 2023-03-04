import React, { useEffect } from "react";
import "./NavBreadcrums.css";
import { useLocation, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import BreadcrumbItem from "../Button/Button";
import Icon, { RightOutlined } from '@ant-design/icons';
import { useState } from "react";

export default function Breadcrumbs({}) {
  const[dataBread, setDataBread] = useState([])
  useEffect(()=>{
    fetch(`https://backoffice.nodemy.vn/api/products/4?populate=*`)
      .then(res => res.json())
      .then(data =>{             
         setDataBread(data.data.attributes)
         console.log(data.data.attributes.name);
         console.log(data.data.attributes.idBrand.data.attributes.name);
             
          })
  },[])
  // const location = useLocation();
  let data = [
    { title: "Trang chủ", to:"/", },
    { title: "Laptop Asus", to: "/",icon:<RightOutlined />  },
    { title: " Laptop Asus Vivobook 15 X515EA BR2045W",icon:<RightOutlined /> },
  ];

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
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          // <BreadcrumbItem icon={item.icon} to={item.to}>{item.title}</BreadcrumbItem>
          <Link to={item.to} key={item.title}>{item.icon} {item.title} </Link>
        ))}
    </div>
  );
}
