import { useState, useEffect } from 'react'
import React from 'react'

const MenuItem = ({ typedata }) => {
    



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
