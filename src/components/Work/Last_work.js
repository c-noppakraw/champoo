import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Last_work = () => {
    const boxConten = {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
    return (
        <>
            <Container className="font-th" fluid style={{backgroundColor: '#e0f8e8', width: '100%', paddingTop: '65px', paddingBottom: '65px'}}>
                <Row style={boxConten}>
                    <Col lg={8} style={{textAlign: 'center'}}>
                        <iframe width="686px" height="350px" src="https://www.youtube.com/embed/Ur8vHWibwRo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col lg={4} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <h5 style={{fontWeight: '600', color: '#313735', textShadow: '2px 2px #a5b59c'}}><i class="fas fa-briefcase"></i> ผลงานล่าสุด</h5>
                        <p style={{color: '#1c1c1c', fontWeight: '600'}}>เพลง เส้นทางของผู้ใหญ่</p>
                        <p>" เป็นเพลงรองในอัลบั้ม Melon Juice ซึ่งเป็นเพลงที่มีความหมายมากสำหรับ Member CGM48 โดยเฉพาะอย่างยิ่ง Uuder Girlie's เนื้อเพลงได้ถอยถอดเรื่องราวการเติบโตต่าง ๆ ในชีวิต ที่จะต้องฝ่าฝันอุปสรรค์เพื่อจะเติบโตไปเป็นผู้ใหญ่ตามที่ต้องการ "</p>
                        <hr style={{width: '70%'}} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Last_work
