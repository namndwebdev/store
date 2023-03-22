import React, { useEffect, useState } from 'react'
import { UilNotes,UilUserCircle,UilTicket,UilShoppingCart,UilSearch,UilPhone,UilYoutube,UilUser,UilArchway  } from '@iconscout/react-unicons'
import './header.css'
import SubHeader from './SubHeader'
import SearchHeader from './SearchHeader'

const Header = () => {

    const [dataHeader, setDataHeader] = useState([])
    useEffect(() => {
        fetch('https://backoffice.nodemy.vn/api/menu-headers?populate[menuheader][populate][0]=link')
        .then((res) => res.json())
        .then((data) => {
            setDataHeader(data.data)
        
        })
    }, [])

  return (
    //
    <>
        <div className='header'>
            <div className='header-menu'>
                <div className='left-header'>
                    <img src="https://via.placeholder.com/170x52.05/green" alt="" />
                </div>
                <div className='right-header'>
                    <div className="right-header__line1">
                        <div className='header-search'>
                            <SearchHeader></SearchHeader>
                            <button className='header-search__button'><UilSearch style={{width:'17px',height:'17px', fontWeight:'700'}}></UilSearch></button>
                        </div>
                        <span className='right-header__line1-menu' >
                            {
                                dataHeader && dataHeader.length > 0 && dataHeader[0].attributes.menuheader.link.map((item) => {
                                    return <span>
                                
                                    <span style={{ marginLeft:'15px' }}>
                                    <span className='top-header__icon' dangerouslySetInnerHTML={{__html:item.icon}}/>
                                        <span style={{fontWeight:'700',fontSize:'15px'}}>{item.label}</span>
                                    </span>
                                </span>
                                })
                            }
                        </span>
                    </div>
                    <div className='right-header__line2'>
                        <span>
                            {
                                dataHeader && dataHeader.length > 0 && dataHeader[1].attributes.menuheader.link.map((item,index) => {
                                    return <span>
                                        <span>
                                        <span className={index !== 3 && 'span-left'}>
                                            <span className='mid-header__icon' dangerouslySetInnerHTML={{__html:item.icon}}/>
                                            <span key={item.id}>{item.label}</span>
                                        </span>    
                                        </span>
                                    </span>
                                })
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:'100%', border:'1px solid #d4d4d4'}}></div>
        <SubHeader data={dataHeader}></SubHeader>
    </>
  )
}

export default Header