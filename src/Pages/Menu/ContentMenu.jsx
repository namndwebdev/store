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
                    <div style={{overflow:"hidden",width:"100%",height:"368px",paddingRight:'5px',paddingBottom:"5px"}}>
                        <CarouselHome />
                    </div>
                </Col>
                <Col  span={8}>
                    {RightImg.map((item)=>{
                        return <img  style={{paddingTop:'10px'}} src ={item}></img>
                    })}
                    </Col>
            </Row>
        </div>
        <div className='MegaMenu-Image-SubItem'>
            <Row>
            {UnderImg.map((item)=>{
              return (<Col span={8}>
             <img style={{paddingTop:'10px'}} src={item}></img>
           </Col>)
                 })}
            </Row>
        </div>
    </div>
    </>
}