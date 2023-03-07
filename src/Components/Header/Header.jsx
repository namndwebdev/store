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
                <img src={'https://via.placeholder.com/170x52.05/green'} alt="logo" />
            </div>
            <div className='right-header'>
                <div className='right-header__line1'>
                    <div className='searchbox-header'>
                        <input className='input-header' type="text" placeholder='Nhập mã sản phẩm hoặc tên sản phẩm' /> 
                        <button className='button-header'><UilSearch className='button-header__icon' style={{width:'17px',height:'17px', fontWeight:'700'}}></UilSearch></button>
                    </div>
                    <span style={{ marginLeft:'15px' }}>
                        <UilNotes style={{fontSize:'50px'}}></UilNotes>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>ĐĂNG KÝ</span>
                    </span>
                    <span style={{ marginLeft:'28px' }}>
                        <UilUserCircle></UilUserCircle>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>ĐĂNG NHẬP</span>
                    </span>
                    <span style={{ marginLeft:'28px' }}>
                        <UilTicket></UilTicket>
                        <span style={{fontWeight:'700',fontSize:'11px'}}>KHUYẾN MÃI</span>
                    </span>
                    <span style={{ marginLeft:'28px' }}>
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
                    <span className='span-left__last'>
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