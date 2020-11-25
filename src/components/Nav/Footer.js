import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const footerHead = {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        // height: '210px',
        paddingTop: '80px',
        paddingBottom: '80px',
    }
    const footer = {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '15px',
        paddingBottom: '15px',
    }
    const headText = {
        color: '#1c1c1c',
        textShadow: '2px 2px #a5b59c',
        fontWeight: '600',
        marginBottom: '25px',
    }
    const boxHeadText = {
        width: '85%',
        marginRight: 'auto',
    }
    return (
        <> 
            <Container className="font-th" fluid sticky="bottom" style={{backgroundColor: '#e0f8e8'}}>
                <Row style={footerHead}>
                    <Col lg={4} style={{borderRight: '1px solid #c1d7d0'}}>
                        <h5 style={headText}>ABOUT ME</h5>
                        <div style={boxHeadText}>
                            <p style={{marginBottom: '0px'}}>เว็บไซต์นี้จัดทำขึ้นเพื่อ เป็นหนึ่งในช่องทางในการประชาสัมพันธ์ และสนับสนุนน้อง <strong>" แชมแชม แชมชู ชูแพม แชมพู!! "</strong> ของเราให้เป็นที่รู้จักมากยิ่งขึ้น</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{borderRight: '1px solid #c1d7d0'}}>
                        <h5 style={headText}>CONNECT WITH US</h5>
                        <div style={boxHeadText}>
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <i className="fab fa-facebook-square"></i> Facebook Fanpage
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <i className="fab fa-line"></i> Line Square
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <i class="fab fa-instagram"></i> Instagram
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <i class="fab fa-twitter-square"></i> Twitter
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h5 style={headText}>CONNECT WITH CHAMPOO</h5>
                        <div style={boxHeadText}>
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <a style={{color: '#212529'}} href="https://www.facebook.com/cgm48official.champoo/">
                                            <i className="fab fa-facebook-square"></i> champoo cgm48
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginBottom: '0px'}}>
                                        <a style={{color: '#212529'}} href="https://www.instagram.com/accounts/login/?next=/champoo.cgm48official">
                                            <i class="fab fa-instagram"></i> @champoo.cgm48official
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="font-th" fluid sticky="bottom" style={{backgroundColor: '#aad5c7'}}>
                <Row style={footer}>
                    <span style={{fontWeight: '400'}}>Presented by CHAMPOO-FANCLUB</span>
                </Row>
            </Container>
        </>
    )
}

export default Footer
