import React from 'react';
import { Card, Button, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Meta } = Card;

// import PercentDisContImg from '../../../public/assets/image'

function Product({ data }) {
    return (
        <>
            {data &&
                data.length > 0 &&
                data.map((item, index) => (
                        // <Col>
                    <div className="cart-wp" key={index}>
                            <Card
                                hoverable
                                cover={
                                    <div className='wp-thumbnail-image-product'>
                                        <img alt="" src='https://via.placeholder.com/230x230/FF0000/FFFFFF' className="thumbnail-product"/>
                                        <div className="order-btn">
                                            <p>Click để xem chi tiết</p>
                                            <Button type="primary" >Đặt hàng</Button>
                                        </div>
                                    </div>
                                }
                                className="custom-antd"
                            >
                                <div className="card-title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="card-price">
                                    <div>
                                        <p className="oldprice">{item.beforeDiscount}</p>
                                        <p className="saleprice">{item.afterDiscount}</p>
                                    </div>
                                    <div
                                        className="salepercent"
                                        style={{
                                            backgroundImage: `url(https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png)`,
                                        }}
                                    >
                                        <span>-{item.percentDiscount}</span>
                                    </div>
                                </div>
                            </Card>
                    </div>
                        // </Col>
                ))}
        </>
    );
}

export default Product;
