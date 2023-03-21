import React, { useEffect, useState } from 'react'
import './Blog.css'
import ReactMarkdown from "react-markdown"; 
export default function Blog() {
    const[blog , setBlog] = useState([])
    useEffect(()=>{
        fetch(`https://backoffice.nodemy.vn/api/blogs/26`)
          .then(res => res.json())
          .then(data => {
            setBlog(data.data.attributes)
          })

    },[])
    let content = String(blog.content)
    content = content.replaceAll("](/uploads", "](https://backoffice.nodemy.vn/uploads")

    return <>
        <div className='Blogs-page'>
            <div class="input-container blog-container">
                <input placeholder="Search something..." class="input" name="text" type="text"/>
                <div class="icon">
                    <i class="bi bi-search"></i>
                </div>
            </div>
            <div className='header-blog'>
                <div className='blog-navbar blog-container'>
                    <div className='navbar-logo'>
                        <img src="https://gstatic.gvn360.com/2021/12/icon_GVN360-300x300.png" alt="logo!" />
                    </div>
                    <ul className='navbar-menu'>
                        <li>Trang chủ</li>
                        <li>Công Nghệ <i class="bi bi-caret-down-fill"></i></li>
                        <li>Tin Game <i class="bi bi-caret-down-fill"></i></li>
                        <li>Hình Nền <i class="bi bi-caret-down-fill"></i></li>
                        <li>Mua Hàng</li>
                    </ul>
                </div>
            </div>
            <div className='blog-content blog-container'>
                <h1 style={{display:"inline-block"}}>{blog ? blog.title :null}</h1>
                <button className="btn-icon">
                    <div className="icon-social">
                        <i className="bi bi-share-fill shere"></i>
                        <i className="bi bi-facebook icon-shere"></i>
                        <i className="bi bi-twitter icon-shere"></i>
                        <i className="bi bi-pinterest icon-shere"></i>
                        <i className="bi bi-whatsapp icon-shere"></i>
                    </div>
                    <p>Share me</p>
                </button>
                <div className='contents' >
                <ReactMarkdown>{content}</ReactMarkdown>                    
                </div>
            </div>
        </div>
    </>
}
