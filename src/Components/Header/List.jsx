import { React } from "react";
import { Link } from "react-router-dom";
import './List.css'

function List({ dataList, inputValue }) {

  console.log(dataList)
  
  return (
    <ul className="dropdown-search">
      {dataList.map((item) => (
        <a href={`/product/${item.attributes.slug}`}>
          <div key={item.id} className="header-search__style">
          {inputValue && (
            <ul  style={{display:'flex', justifyContent:'space-between'}} className="header-search-content">
              <li>
              <img style={{width:'70px',height:'70px',display:'inline', objectFit:'cover'}}
                src={`${process.env.REACT_APP_LINK_BACK_END}${item.image?.data[0].attributes.url}`}
                alt=""
              />
              </li>
              <li className="input-content" style={{alignItems:'center', fontSize:'14px'}}>{item.attributes.name}</li>
              <li style={{paddingRight:'5px', fontSize:'14px'}}>{Number(item.attributes.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</li>
            </ul>
          )}
        </div>
        </a>
      ))}
    </ul>
  );
}

export default List;
