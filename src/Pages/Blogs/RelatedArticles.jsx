import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination, Avatar, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function RelatedArticles({ data }) {
  // const [list,setList] = useState(dataAPI)
  const list = [data]
  const [listBlog, setListBlog] = useState([])
  function getListCategoriesFromListBLog() {
    return list.map((item) => {
      return item ? item.data.map((item) => {
        return item.attributes.username
      }) : []
    })
  } // map ra các username

  const array = getListCategoriesFromListBLog()
  const listCategoriesBlog = array.flat().filter(Boolean) // nối lại thành 1 mảng và lọc bỏ các gtrị null , undefined , rỗng

  function getBlogInCategories5Latest(listCategoriesBlog) {
    let url = 'https://backoffice.nodemy.vn/api/blogs?'
    let lastUrl = ''
    listCategoriesBlog.forEach((item, index) => {
      url += `filters[likedBy][username][$contains]=${item}&`
    })
    return lastUrl = url + 'sort[0]=updatedAt%3Adesc&populate=*'
  }
  const lastUrl = getBlogInCategories5Latest(listCategoriesBlog)

  useEffect(() => {
    axios.get(`${lastUrl}`)
      .then((res) => {
        setListBlog([...res.data.data])
      })
  }, [lastUrl])
  console.log(listBlog);
  return <>
    <div className='articles'>Related Articles</div>
    <div className='related-articles'>
      {listBlog.map((item) => {
        return <div class="article" key={item.id}>
            <img src={`https://backoffice.nodemy.vn${item.attributes?.image?.data?.attributes.url ? item.attributes?.image?.data?.attributes.url : null}`} alt="Article 1" />
            <h3>
              <a href={`/blogs/${item?.attributes.slug}`} >{item?.attributes?.title}</a>
            </h3>
            <p>{item?.attributes?.content}</p>
        </div>
      })}
    </div>
    <Pagination total={null} onChange={null} pageSize={4} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} />
  </>

}
