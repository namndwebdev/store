import { Col, Row } from 'antd';

export default function ImageMenu (){
    return <>
    <div className="MegaMenu-Image">
        <div style={{height:"100%"}} className='MegaMenu-Image-Carousel'>
            <Row>
                <Col span={16}><img style={{width:"100%",height:"100%",paddingRight:'5px',paddingBottom:"5px"}} src="https://via.placeholder.com/737x365/FF0000/FFFFFF" alt="" /></Col>
                <Col span={8}>
                    <div style={{height:"100%"}} className='MegaMenu-Image-Carousel-Item'>
                        <div style={{height:"50%"}}><img style={{height:"100%",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div>
                        <div style={{height:"50%"}}><img style={{height:"100%",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div>
                    </div>
                    </Col>
            </Row>
        </div>
        <div className='MegaMenu-Image-SubItem'>
            <Row>
                <Col span={8}><div><img style={{width:"100%",height:"100%",paddingRight:"5px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
                <Col span={8}><div><img style={{width:"100%",height:"100%",paddingRight:"5px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
                <Col span={8}><div><img style={{width:"100%",height:"100%",paddingRight:"6px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
            </Row>
        </div>
    </div>
    <div className="MegaMenu-mainframe">
        <Row>
            <Col span={6}><div><img style={{width:"100%",height:"100%",paddingRight:"5px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
            <Col span={6}><div><img style={{width:"100%",height:"100%",paddingRight:"5px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
            <Col span={6}><div><img style={{width:"100%",height:"100%",paddingRight:"5px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
            <Col span={6}><div><img style={{width:"100%",height:"100%",paddingRight:"9px",paddingBottom:"5px"}} src="https://via.placeholder.com/368x184/FF0000/FFFFFF" alt="" /></div></Col>
        </Row>
        
        
    </div> 
    </>
}