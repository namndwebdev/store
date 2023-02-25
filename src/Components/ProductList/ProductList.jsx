import React, { useState } from 'react';
import './ProductList.css';
import { Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Product from '../Product/Product';

const { Meta } = Card;

const ProductList = ({ title, data }) => {
    return (
        <div className="card-wp-parents">
            <div className="banner">
                <div className="banner-item">
                    <h2 className="new-product-title">{title}</h2>
                    <div></div>
                </div>
            </div>
            <div className="product">
                <Product data={data} />
            </div>
        </div>
    );
};

export default ProductList;
