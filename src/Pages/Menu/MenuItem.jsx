import React from 'react'
const MenuItem = ({ typedata }) => {
    
    return (
        <div className='wrap-megamenu-item'> 
                    <div className='wrap-megamenu-section'>
            {
                typedata.section.map((item)=>{
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
                    <div className='img-laptop-megamenu'>
                        <img   src={`${process.env.REACT_APP_LINK_BACK_END}${typedata.bannerFeatures.data.attributes.url}`}></img>
                    </div>  
        </div>
    )
}

export default MenuItem
