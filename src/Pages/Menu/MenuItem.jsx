import React from 'react'

const data_menu_item_brand = [
    {
        id:'dell',
        title:'Dell'
    },
    {
        id:'aple',
        title:'Apple'
    },
    {
        id:'asus',
        title:'Asus'
    },
]
const data_menu_item_price = [
    {
        id:'5-10tr',
        title:'5-10tr'
    },
    {
        id:'10-20tr',
        title:'10-20tr'
    },
    {
        id:'tren20tr',
        title:'Trên 20tr'
    },
]
const data_menu_item_configuration = [
    {
        id:'I3-RTX1650',
        title:'I3-RTX1650'
    },
    {
        id:'I5-RXG3600',
        title:'I5-RXG3600'
    },
    {
        id:'I7-RTX3060',
        title:'I7-RTX3060'
    },
]
const MenuItem = (props) => {
    return (
        <div className='wrap-megamenu-item'>
            {
                props.typedata === 'lap_top' && (
                    <>
                        <div>
                            <p className='title-megamenu-item'>Thương hiệu</p>
                            <ul>
                                {
                                    data_menu_item_brand.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Laptop theo giá</p>
                            <ul>
                            {
                                    data_menu_item_price.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Cấu Hình</p>
                            <ul>
                            {
                                    data_menu_item_configuration.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <img className='img-laptop-megamenu' src="https://via.placeholder.com/50x50/FF0000/FFFFFF"></img>
                        </div>
                        </>
                )
            }
            {
                props.typedata === 'lap_top_gaming' && (
                    <>
                        <div>
                            <p className='title-megamenu-item'>Thương hiệu Gaming</p>
                            <ul>
                            {
                                    data_menu_item_brand.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Laptop theo giá</p>
                            <ul>
                            {
                                    data_menu_item_price.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='title-megamenu-item'>Cấu Hình</p>
                            <ul>
                            {
                                    data_menu_item_configuration.map((item)=>(
                                        <li className='item-megamenu-laptop'>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <img className='img-laptop-megamenu' src="https://via.placeholder.com/50x50/FF0000/FFFFFF"></img>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MenuItem
