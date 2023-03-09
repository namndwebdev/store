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
    console.log(typedata);



    return (

        <div className='wrap-megamenu-item'>
                     <>
                    <div className='wrap-megamenu-section'>
            {
                typedata.map((item)=>{
                     return   <div>
                     <p className='title-megamenu-item'>{item.title}</p>
                      <ul>
                          {
                              item.link.map((item) => (
                                  <li className='item-megamenu-laptop'>{item.label}</li>
                              ))
                          }
                      </ul>
                     </div>
                })
            }
                    </div>
                </>
             <div className='img-laptop-megamenu'>
                        <img   src="https://via.placeholder.com/50x50/FF0000/FFFFFF"></img>
                    </div>  
        </div>
    )
}

export default MenuItem
