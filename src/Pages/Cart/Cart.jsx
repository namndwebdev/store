import { current } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './Cart.css'
export default function Cart(){

    // const dataApi = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    const dataApi = [{name:'Chuột Havit MS1017',price:200000,quantity:1},{name:'GVN PHANTOM Plus i4070Ti',price:64000000,quantity:1},{name:'May Tinh',price:5000,quantity:1}]
    const [list,setList] = useState(dataApi)
    function OnChangeTextInput(e) {
        var indexElement = e.target.getAttribute('data')
        list[indexElement].quantity = e.target.value
        setList([...list])
     } 
     
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(list));
    })
    return <>
    <div className="Page-Cart" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}} >
        <div className="Page-Cart-Header"> <h1>GIỎ HÀNG <i style={{fontSize:'35px'}} class="bi bi-cart"></i></h1></div>
        <div className="Page-Cart-Body" style={{width:'1200px'}}>
            <table border={1} style={{width:'100%',textAlign:"center"}}>
                <tbody>
                <tr>
                    <td>
                        <h2>SẢN PHẨM</h2>
                    </td>
                    <td>
                        <h2>Tên Sản Phẩm</h2>
                    </td>
                    <td>
                        <h2>Số Lượng</h2>
                    </td>
                    <td>
                        <h2>Giá Tiền</h2>
                    </td>
                    <td>
                        <h2>Xoá</h2>
                    </td>
                </tr>
                {list.map((item,index)=>{
                  return    <tr key={index} style={{height:'150px'}}>
                            <td style={{width:'20%'}} className="Page-Cart-Body-img">
                                <img  style={{width:'80%',objectFit:'contai'}} src="https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye.jpg" alt="" />
                                
                            </td>
                            <td  className='Page-Cart-Body-NameItem'>
                                <span>{item.name}</span>
                            </td>
                            <td style={{width:'20%'}}>
                                <input style={{width:'30%'}} data={index} onChange={OnChangeTextInput} type="number" value={item.quantity} min='1'/>
                            </td>
                            <td style={{width:'20%'}}>
                                {(item.price*item.quantity).toLocaleString('vi-VN', {style : 'currency', currency: 'VND'})}
                            </td>
                            <td  className='Page-Cart-Body-Remove'>
                            <button  onClick={function ClickToRemove(){
                                list.splice(index,1)
                                setList([...list])
                            }} ><i class="bi bi-trash3-fill"></i></button>
                            </td>
                           </tr>
                 })}
                        <tr style={{height:'70px'}}>
                        <td colSpan="4"><h2 style={{fontSize:'25px'}} >Tổng tiền:</h2></td>
                        <td><h2 style={{fontSize:'20px'}}>
                            {
                                (list.reduce(function(total, item){
                                    console.log(total);
                                    return total + (item.price * item.quantity)
                                }, 0)).toLocaleString('vi-VN', {style : 'currency', currency: 'VND'})
                            }
                        </h2></td>
                     </tr>
                  <tr>
                    <td  colSpan='5'><input className='Page-Cart-Body-Note'  type="text" placeholder='Ghi Chú'/></td>
                  </tr>
                </tbody>               
            </table>
        </div>
        <div className='Page-Cart-Footer'><button>Thanh toán</button></div>

    </div>
    
    </>

}