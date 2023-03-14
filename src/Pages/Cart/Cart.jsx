import { current } from '@reduxjs/toolkit'
import { useState } from 'react'
import './Cart.css'
export default function Cart(){
    const dataApi = [{name:'maytinh',price:2500,quantity:0},{name:'laptop',price:3000,quantity:0}]
    // const total_price = dataApi.reduce((total, currentValue)=>{
    //     return total + currentValue.quantity*currentValue.price
    // })
    const [list,setList] = useState(dataApi)
    function OnChangeTextInput(e) {
       var indexElement = e.target.getAttribute('data')
       list[indexElement].quantity = e.target.value
       setList([...list])
    } 
    
    return <>
    <div className="Page-Cart" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}} >
        <div className="Page-Cart-Header"> <h1>GIỎ HÀNG</h1></div>
        <div className="Page-Cart-Body" style={{width:'1200px'}}>
            <table border={1} style={{width:'100%',textAlign:"center"}}>
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
                  return    <><tr key={index}>
                             <td className="Page-Cart-Body-img">
                            <img src="" alt="" />
                             </td>
                             <td>
                            {item.name}
                             </td>
                             <td>
                            <input data={index} onChange={OnChangeTextInput} type="number" />
                            </td>
                            <td>
                           {item.price*item.quantity}
                            </td>
                            <td>
                            <button style={{border:"none",backgroundColor:'white'}} onClick={function ClickToRemove(){
                                list.splice(index,1)
                                setList([...list])
                            }} ><i class="bi bi-trash3-fill"></i></button>
                            </td>
                           </tr>
                           </>
                 })}
                     <tr>
                        <td colspan="4"><h2>Tổng tiền:</h2></td>
                        <td><h2>{total_price}</h2></td>
                     </tr>
                  <tr>
                    <td  colspan='5'><input style={{width:'90%'}} type="text" placeholder='Ghi Chú'/></td>
                  </tr>
               
            </table>
        </div>

    </div>
    
    </>

}