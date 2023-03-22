import { React, useEffect, useState } from "react";
import List from "./List";
import  './header.css'
import useDebounce from "../HOC/useDebounce";
// import { useDebounce } from 'use-debounce';

const SearchHeader = () => {
  const [inputText, setInputText] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  // const [debouncedInput] = useDebounce(inputText, 2000);
  let inputHandler = (e) => {
    var valueInput = e.target.value;
    setInputText(valueInput);
  };
  const debounceValue = useDebounce(inputText, 1000)

  useEffect(() => {
    const fetchData = (query) => {
      fetch(
        `https://backoffice.nodemy.vn/api/products?filters[name][$contains]=${query}&populate=*`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataSearch(data.data);
        });
    };
    fetchData(inputText)
  }, [debounceValue]);

  

  return (
    <div className="main">
      <div className="search">
        <input
          className="header-search__input"
          onChange={inputHandler}
          placeholder='Nhập mã hoặc tên sản phẩm ...'
        />
      </div>
      {<List dataList={dataSearch} inputValue={inputText} />}
    </div>
  );
};

export default SearchHeader;
