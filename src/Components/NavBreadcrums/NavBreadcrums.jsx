import React from "react";
import "./NavBreadcrums.css";
import { useLocation, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
  
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">
    <span>Bạn đang ở:</span>
    <Link to={"/"}>Trang chủ </Link>
    {crumbs}
    </div>;
}
