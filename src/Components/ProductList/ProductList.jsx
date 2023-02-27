import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { Card, Button, Layout, Row,Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Product from '../Product/Product';

import {Link} from 'react-router-dom'
import {RightOutlined} from '@ant-design/icons'

const { Meta } = Card;

const ProductList = ({ title, data, currentPage, setPage }) => {

  

    const handlePagination = (pageClick) => {
        setPage(pageClick)
    }
    
    return (
        <div className='container'>
            <div className="card-wp-parents">
                <div className="banner">
                    <div className="banner-item">
                        <h2 className="new-product-title">{title}</h2>
                        <Link to="/product/1">
                            <span>Xem tất cả</span>
                            <RightOutlined/> 
                        </Link>
                    </div>
                </div>
                <div className="product">
                    <Row>
                        <Product data={data} />
                    </Row>
                </div>
                <div className='pagination'>
                    <Pagination current={currentPage} onChange={handlePagination} total={50} />
                </div>
            </div>
        </div>
    );
};

export default ProductList;


