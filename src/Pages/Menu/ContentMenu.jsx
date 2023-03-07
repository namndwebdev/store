import { Col, Row } from 'antd';
import CarouselHome from '../../Components/CarouselHome/CarouselHome';
const RightImg = [
    "https://via.placeholder.com/368x184/FF0000/FFFFFF",
    "https://via.placeholder.com/368x184/FF0000/FFFFFF",
]
const UnderImg = [
    "https://via.placeholder.com/368x184/FF0000/FFFFFF",
    "https://via.placeholder.com/368x184/FF0000/FFFFFF",
    "https://via.placeholder.com/368x184/FF0000/FFFFFF",
]
export default function ContentMenu (){
    return <>
    <div className="MegaMenu-Image">
        <div style={{height:"100%"}} className='MegaMenu-Image-Carousel'>
            <Row>
                <Col span={16}>
                    <div style={{overflow:"hidden",width:"100%",height:"100%",paddingRight:'10px'}}>
                        <CarouselHome />
                    </div>
                </Col>
                <Col  span={8} style={{width:"100%",height:"100%",paddingRight:"20px"}}>
                    {RightImg.map((item)=>{
                        return <img  style={{width:'100%',}} src ={item}></img>
                    })}
                    </Col>
            </Row>
        </div>
        <div className='MegaMenu-Image-SubItem'>
            <Row style={{paddingRight:"10px"}}>
            {UnderImg.map((item)=>{
              return (<Col span={8} style={{width:"100%",padding:"0px 10px 0px 0px"}}>
             <img style={{width:'100%',}} src={item}></img>
           </Col>)
                 })}
            </Row>
        </div>
    </div>
    </>
}