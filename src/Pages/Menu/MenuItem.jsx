import { Link } from "react-router-dom";
import React from 'react'
const MenuItem = ({ typedata }) => {

    return (
        <div className='wrap-megamenu-item'>
            <div className='wrap-megamenu-section'>
                {
                    typedata.section.map((item) => {
                        return <div key={item.id}>
                            <p className='title-megamenu-item'>{item.title}</p>
                            <ul>
                                {
                                    item.link.map((item) => (
                                        <li className='item-megamenu-laptop'>
                                            <Link to={`${item.url}`} style={{ color: 'black' }} >{item.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
            <div className='img-laptop-megamenu'>
                <Link to='1/'><img src={`${process.env.REACT_APP_LINK_BACK_END}${typedata.bannerFeatures.data.attributes.url}`}></img></Link>
            </div>
        </div>
    )
}

export default MenuItem
