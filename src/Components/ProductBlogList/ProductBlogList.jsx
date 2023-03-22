import React, { useEffect, useState } from 'react'
import './ProductBlogList.css'
export default function ProductBlogList() {
  const [blogList, setblogList] = useState([])
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setblogList(res.data);
      })
  }, [])
  return (
    <div className='blog-list-container'>
      <h2 className="blog-list__title">PC GEARVN - TOP LIST PC NỔI BẬT</h2>
      <div className='row'>
        <div className='col-10' style={{ borderRight: '1px solid silver', paddingRight: '20px' }}>
          {blogList.map((item) => {
            return <div className='row'>
              <div className='col-4'>
                <img src={`https://backoffice.nodemy.vn${item.attributes.image.data[0].attributes.url}`}
                  alt="">
                </img>
              </div>
              <div className='col-8 pt-5'>
                <h2 className='fw-bold text-danger'>{item.attributes.name}</h2>
                <p className='overflow-hidden'>{item.attributes.description}</p>
                <p>CPU : {item.attributes.cpu}</p>
                <p>RAM : {item.attributes.ram}</p>
              </div>
            </div>

          })}
        </div>

        <div className='col-2 blog-list__right'>
          <div className='row'>
            <img src='https://w.ladicdn.com/s500x900/5bf3dc7edc60303c34e4991f/11-side-web-230x679-20230301043030-u7pnn.png' alt=''></img>
          </div>
          <div className='row mt-3'>
            <img src='https://w.ladicdn.com/s500x900/5bf3dc7edc60303c34e4991f/side-web-20230214022014-feh4d-20230313033643-ws0dz.png' alt=''></img>
          </div>
          <div className='row mt-3'>
            <img src='https://w.ladicdn.com/s550x950/5bf3dc7edc60303c34e4991f/side-web-20230221090231-qrep_.png' alt=''></img>
          </div>
          <div className='row mt-3'>
            <img src='https://w.ladicdn.com/s550x950/5bf3dc7edc60303c34e4991f/side-web-20230213133317-_tcfj.png' alt=''></img>
          </div>
        </div>
      </div>

    </div>
  )
}
