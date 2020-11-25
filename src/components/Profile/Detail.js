import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Detail = () => {
    return (
        <>
            <Container className="font-th" fluid style={{width: '80%'}}>
                <Row style={{marginTop: '45px'}}>
                    <Col lg={6} style={{textAlign: 'center'}}>
                        <img
                            src="/img/img_champoo/635523.png"
                            width="45%"
                            // width="200px"
                            // height="50px"
                            alt="635523.png"
                        />
                    </Col>
                    <Col lg={6} style={{marginBottom: 'auto', marginTop: 'auto', borderLeft: '1px solid #c1d7d0', paddingLeft: '50px'}}>
                        <h3 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c'}}>Champoo</h3>
                        <h5 style={{color: '#1c1c1c', fontWeight: '600'}}>กชพร ลีละทีป</h5>
                        <h5 style={{color: '#1c1c1c', fontWeight: '600'}}>Kodchaporn Leelatheep</h5>
                        <p>CGM48 Team Trainee</p>
                        <Row>
                            <Col lg={3}>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>วันเกิด :</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>ส่วนสูง :</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>จังหวัด :</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>สิ่งที่ชอบ :</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>กรุ๊ปเลือด :</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>งานอดิเรก :</p>
                            </Col>
                            <Col lg={9}>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>10 ตุลาคม 2548</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>155 ซม.</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>ลำปาง</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>สติทซ์ พวงกุญแจน่ารักๆ เพลงดิสนีย์ แมว</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>B</p>
                                <p style={{marginBottom: '5px', fontSize: '14px',}}>ฟังเพลง ร้องเพลง วาดรูป ดูหนังดูการ์ตูน</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}

export default Detail