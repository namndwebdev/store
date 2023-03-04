import { useState, useEffect } from 'react'
import React from 'react'
const data_menu_item_price = [
    {
        id: '5-10tr',
        title: '5-10tr'
    },
    {
        id: '10-20tr',
        title: '10-20tr'
    },
    {
        id: 'tren20tr',
        title: 'Trên 20tr'
    },
]
const data_menu_item_configuration = [
    {
        id: 'I3-RTX1650',
        title: 'I3-RTX1650'
    },
    {
        id: 'I5-RXG3600',
        title: 'I5-RXG3600'
    },
    {
        id: 'I7-RTX3060',
        title: 'I7-RTX3060'
    },
]
const MenuItem = ({ typedata }) => {
    const [data, SetData] = useState([]);

    useEffect(() => {
        fetch('https://backoffice.nodemy.vn/api/brands')
            .then((res) => res.json())
            .then((data) => {
                SetData(data.data);
            })
    }, [])

    return (

        <div className='wrap-megamenu-item'>
            {
                typedata === 2 && (
                    <>
                        <div>
                            <p className='title-megamenu-item'>Thương Hiệu</p>
                            <ul>
                                {
                                    data.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.attributes.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Laptop theo giá</p>
                            <ul>
                                {
                                    data_menu_item_price.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Cấu Hình</p>
                            <ul>
                                {
                                    data_menu_item_configuration.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <img className='img-laptop-megamenu' src="https://via.placeholder.com/50x150/blue/FFFFFF"></img>
                        </div>
                    </>
                )
            }
            {
                typedata === 3 && (
                    <>
                        <div>
                            <p className='title-megamenu-item'>Thương hiệu Gaming</p>
                            <ul>
                                {
                                    data.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.attributes.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Laptop theo giá</p>
                            <ul>
                                {
                                    data_menu_item_price.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Cấu Hình</p>
                            <ul>
                                {
                                    data_menu_item_configuration.map((item) => (
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <img className='img-laptop-megamenu' src="https://via.placeholder.com/50x150/blue/FFFFFF"></img>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MenuItem
