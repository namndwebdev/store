import React from 'react';
import { Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Meta } = Card;

function Product({ data }) {
    return (
        <>
            {data &&
                data.length > 0 &&
                data.map((item, index) => (
                    <div className="cart-wp" key={index}>
                        <Card
                            hoverable
                            cover={
                                <>
                                    <img alt="" src={item.thumbnail} />
                                    <div className="order-btn">
                                        <p>Click để xem chi tiết</p>
                                        <Button type="primary">Đặt hàng</Button>
                                    </div>
                                </>
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
                                        backgroundImage: `url(https://via.placeholder.com/48x51/FF0000/FFFFFF)`,
                                    }}
                                >
                                    <span>-{item.percentDiscount}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
        </>
    );
}

export default Product;
