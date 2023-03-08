import { Col, Row } from 'antd';
import CarouselHome from '../../Components/CarouselHome/CarouselHome';
import {useEffect,useState} from 'react'
export default function ContentMenu (){
    const[imgRight,SetImgRight] = useState([])
    const[imgSub,SetImgSub] = useState([])
   
    useEffect(()=>{
        const callAPI = () => {
            fetch('https://backoffice.nodemy.vn/api/homepage?populate=*')
            .then(res=>res.json())
            .then((data)=>{
               const arrayleft = data.data.attributes.rightBanner.data.map((item)=>{
                return item.attributes.url
               })
               SetImgRight(arrayleft)  
               const arraysub = data.data.attributes.subBanner.data.map((item)=>{
                return item.attributes.url
               })
               SetImgSub(arraysub)  
            })
        }
        callAPI()
    },[])    
    return <>
    <div className='Content-Menu'>
    <div className="MegaMenu-Image">
        <div style={{height:"100%"}} className='MegaMenu-Image-Carousel'>
            <Row>
                <Col span={16}>
                    <div style={{width:"100%",height:"100%",paddingRight:'10px'}}>
                        <CarouselHome />
                    </div>
                </Col>
                
                <Col span={8}>
                    {imgRight.map((item)=>{
                        return<>                
                        <img  style={{objectFit:'cover',display:'block',width:'90%',height:'50%',paddingTop:'10px'}} src ={`${process.env.REACT_APP_LINK_BACK_END}${item}`}></img>                      
                        </>
                    })}
                </Col>
                   
            </Row>
        </div>
        <div className='MegaMenu-Image-SubItem'>
            <Row justify="space-between">
            {imgSub.map((item)=>{
              return (<Col span={8} style={{width:"100%",padding:"0px 10px 0px 0px"}}>
             <img style={{objectFit:'cover',display:'block',width:'100%',height:'100%',paddingTop:'10px'}} src={`${process.env.REACT_APP_LINK_BACK_END}${item}`}></img>
           </Col>)
                 })}
            </Row>
        </div>
    </div>
    </div>
    </>
}