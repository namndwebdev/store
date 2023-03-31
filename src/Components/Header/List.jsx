import { React } from "react";
import './List.css'

function List({ dataList, inputValue }) {
  
  return (
    <ul className="dropdown-search">
      {dataList.map((item) => (
        <div key={item.id} className="header-search__style">
          {inputValue && (
            <div className="header-search-content">
              <img
                src={`${process.env.REACT_APP_LINK_BACK_END}${item.image?.data[0].attributes.url}`}
                alt=""
              />
              <p className="input-content">{item.attributes.name}</p>
              <p></p>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}

export default List;
