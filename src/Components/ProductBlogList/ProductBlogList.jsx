import React, { useEffect, useState } from 'react'

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
    <div>
      {blogList.map((item) => {

        return <div className='container' style={{ width: '60%', margin: '0 auto' }}>
          <div className='row mt-3 mb-3' style={{border:'1px solid silver'}}>
            <img src={`https://backoffice.nodemy.vn${item.attributes.image.data[0].attributes.url}`}
              alt="" style={{ width: '50%', margin: '0 auto' }}></img>
              <p className='text-center text-danger fw-bold pb-3'>{item.attributes.name}</p>
          </div>
        </div>
      })}
    </div>
  )
}
