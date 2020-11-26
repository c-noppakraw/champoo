// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import { Col, Container, Row } from 'react-bootstrap';

const Work_champoo = () => {
    // const [value, onChange] = useState(new Date());
    const boxConten = {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
    const boxContenIg = {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
    return (
        <>  <Container className="font-th" fluid style={{width: '100%', paddingTop: '65px', paddingBottom: '65px'}}>
                <Row style={boxConten}>
                    {/* <Col lg={4}>
                        <div>
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </Col> */}
                    <Col lg={6}>
                        <h5 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c', marginBottom: '20px'}}><i class="far fa-calendar-alt"></i> ตารางงานของน้องเร็ว ๆ นี้</h5>
                        <table className="table" size="sm">
                            <thead style={{borderBottom: '1px solid #c1d7d0'}}>
                                <tr style={{backgroundColor: '#e0f8e8'}}>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '20%',}}>วันที่</th>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '40%',}}>ชื่องาน</th>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '40%',}}>รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>28-29 พ.ย. 63</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice รอบ กรุงเทพมหานคร จัดที่ BITEC Bangna Hall EH107</td>
                                </tr>
                                {/* <tr>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>16 ม.ค. 64</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice รอบ เชียงใหม่ จัดที่ Chiang Mai Hall, Central Plaza Chiang Mai Airport</td>
                                </tr> */}
                            </tbody>
                        </table>      

                        {/* <h5 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c', marginBottom: '20px'}}>ตารางงานของน้องเร็ว ๆ นี้</h5>
                        <table className="table" size="sm">
                            <thead style={{borderBottom: '1px solid #c1d7d0'}}>
                                <tr style={{backgroundColor: '#e0f8e8'}}>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '20%',}}>วันที่</th>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '40%',}}>ชื่องาน</th>
                                    <th style={{borderTop: 'unset', borderBottom: '1px solid #c1d7d0', width: '40%',}}>รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>28-29 พ.ย. 63</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice รอบ กรุงเทพมหานคร จัดที่ BITEC Bangna Hall EH107</td>
                                </tr>
                                <tr>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>16 ม.ค. 64</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice</td>
                                    <td style={{borderBottom: '1px solid #c1d7d0'}}>งานจับมือ 2nd Single Melon Juice รอบ เชียงใหม่ จัดที่ Chiang Mai Hall, Central Plaza Chiang Mai Airport</td>
                                </tr>
                            </tbody>
                        </table>                                          */}
                    </Col>
                    <Col lg={6}>
                        <h5 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c', marginBottom: '20px'}}><i class="fab fa-twitter-square"></i> Twitter</h5>
                        <Row>
                            {/*  */}
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <img
                                            src="/img/user.png"
                                            width="50px"
                                            height="50px"
                                            alt="user.png"
                                        />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{fontWeight: '600', marginBottom: '0px'}}>พี่เกม <span style={{color: '#7f7f7f'}}>@pgame</span></p>
                                        <p>เก่งขึ้นมาก ๆ เลยเจ้าแชมพู รอยยิ้มของพี่ #champoocgm48</p>
                                    </Col>
                                </Row>
                                <hr style={{marginTop: '8px', marginBottom: '8px', borderColor: '#c1d7d0'}} />
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <img
                                            src="/img/user.png"
                                            width="50px"
                                            height="50px"
                                            alt="user.png"
                                        />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{fontWeight: '600', marginBottom: '0px'}}>พี่เกม <span style={{color: '#7f7f7f'}}>@pgame</span></p>
                                        <p>เก่งขึ้นมาก ๆ เลยเจ้าแชมพู รอยยิ้มของพี่ #champoocgm48</p>
                                    </Col>
                                </Row>
                                <hr style={{marginTop: '8px', marginBottom: '8px', borderColor: '#c1d7d0'}} />
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <img
                                            src="/img/user.png"
                                            width="50px"
                                            height="50px"
                                            alt="user.png"
                                        />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{fontWeight: '600', marginBottom: '0px'}}>พี่เกม <span style={{color: '#7f7f7f'}}>@pgame</span></p>
                                        <p>เก่งขึ้นมาก ๆ เลยเจ้าแชมพู รอยยิ้มของพี่ #champoocgm48</p>
                                    </Col>
                                </Row>
                                <hr style={{marginTop: '8px', marginBottom: '8px', borderColor: '#c1d7d0'}} />
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <img
                                            src="/img/user.png"
                                            width="50px"
                                            height="50px"
                                            alt="user.png"
                                        />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{fontWeight: '600', marginBottom: '0px'}}>พี่เกม <span style={{color: '#7f7f7f'}}>@pgame</span></p>
                                        <p>เก่งขึ้นมาก ๆ เลยเจ้าแชมพู รอยยิ้มของพี่ #champoocgm48</p>
                                    </Col>
                                </Row>
                                <hr style={{marginTop: '8px', marginBottom: '8px', borderColor: '#c1d7d0'}} />
                            </Col>
                            {/*  */}

                        </Row>
                    </Col>
                </Row>
                <Row style={boxContenIg}>
                    <Col lg={12}>
                        <h5 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c', marginTop: '20px', marginBottom: '20px'}}><i class="fab fa-instagram"></i> Instagram</h5>
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={3}>
                                         <img 
                                            src="/img/img_ig/85122859_201073847946410_8857060014255243264_n.jpg"
                                            width="100%"
                                            // width="50px"
                                            // height="50px"
                                            alt="85122859_201073847946410_8857060014255243264_n.jpg"
                                        />
                                    </Col>
                                    <Col lg={3}>
                                         <img 
                                            src="/img/img_ig/85122859_201073847946410_8857060014255243264_n.jpg"
                                            width="100%"
                                            // width="50px"
                                            // height="50px"
                                            alt="85122859_201073847946410_8857060014255243264_n.jpg"
                                        />
                                    </Col>
                                    <Col lg={3}>
                                        <img 
                                            src="/img/img_ig/122002959_400057021381424_5401009156022263739_n.jpg"
                                            width="100%"
                                            // width="50px"
                                            // height="50px"
                                            alt="122002959_400057021381424_5401009156022263739_n.jpg"
                                        />
                                    </Col>
                                    <Col lg={3}>
                                        <div style={{height: '280px'}}>
                                            <img 
                                                src="/img/img_ig/635523.jpg"
                                                width="100%"
                                                // width="50px"
                                                // height="50px"
                                                alt="635523.jpg"
                                            />
                                        </div>
                                    </Col>
                                    
                                </Row>
                                {/* <Row>
                                    <Col lg={3}>
                                        <img
                                            src="/img/user.png"
                                            width="50px"
                                            height="50px"
                                            alt="user.png"
                                        />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{fontWeight: '600', marginBottom: '0px'}}>พี่เกม <span style={{color: '#7f7f7f'}}>@pgame</span></p>
                                        <p>เก่งขึ้นมากๆเลยเจ้าแชมพู รอยยิ้มของพี่ #champoocgm48</p>
                                    </Col>
                                </Row> */}
                                <hr style={{marginTop: '8px', marginBottom: '8px', borderColor: '#c1d7d0'}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Work_champoo
