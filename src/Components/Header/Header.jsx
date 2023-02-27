import React from 'react'
// import logoHeader from '../../static/svg/logo-header'
import { UilNotes,UilUserCircle,UilTicket,UilShoppingCart,UilSearch,UilPhone,UilYoutube,UilUser,UilArchway  } from '@iconscout/react-unicons'
import './header.css'

const Header = () => {
  return (
    //
    <>
        <div className='header'>
         <div className='header-item'>
         <div className='left-header'>
                <img src={''} alt="logo" />
            </div>
            <div className='right-header'>
                <div className='right-header__line1'>
                    <div className='searchbox-header'>
                        <input className='input-header' type="text" placeholder='Nhập mã sản phẩm hoặc tên sản phẩm' /> 
                        <button className='button-header'><UilSearch style={{fontSize:'5px'}}></UilSearch></button>
                    </div>
                    <span>
                        <UilNotes></UilNotes>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>ĐĂNG KÝ</span>
                    </span>
                    <span>
                        <UilUserCircle></UilUserCircle>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>ĐĂNG NHẬP</span>
                    </span>
                    <span>
                        <UilTicket></UilTicket>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>KHUYẾN MÃI</span>
                    </span>
                    <span>
                        <UilShoppingCart></UilShoppingCart>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>GIỎ HÀNG</span>
                    </span>
                </div>
                <div className='right-header__line2'>
                    <span className='span-left'>
                        <UilPhone></UilPhone>
                        <span>TỔNG ĐÀI</span>
                    </span>
                    <span className='span-left'>
                        <UilYoutube></UilYoutube>
                        <span>VIDEOS</span>
                    </span>
                    <span className='span-left'>
                        <UilUser></UilUser>
                        <span>TUYỂN DỤNG</span>
                    </span>
                    <span>
                        <UilArchway></UilArchway>
                        <span>HỆ THỐNG SHOWROOM</span>
                    </span>
                </div>
            </div >
         </div>
        </div>
        <span className='between-line'></span>
    </>
  )
}

export default Header