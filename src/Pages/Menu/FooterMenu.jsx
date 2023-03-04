import { Col, Row } from 'antd';
const imageFooter = [
    "https://via.placeholder.com/320x180/FF0000/FFFFFF",
    "https://via.placeholder.com/320x180/FF0000/FFFFFF",
    "https://via.placeholder.com/320x180/FF0000/FFFFFF",
    "https://via.placeholder.com/320x180/FF0000/FFFFFF",
]

export default function FooterMenu (){
    return <>
    <Row>
    {imageFooter.map((item)=>{
        return (<Col  span={6}>
             <img style={{width:'100%',height:'100%', paddingRight:'5px'}} src={item}></img>
        </Col>)
    })}
       
    </Row>
    
    </>
}