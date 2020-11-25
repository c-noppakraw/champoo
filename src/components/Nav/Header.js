import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    const myStyleHead = {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#aad5c7'
    }
    return (
        <>
            <div style={{backgroundColor: '#aad5c7', fontWeight: '700'}}>
                <Navbar style={myStyleHead}>
                    <Navbar.Brand href="">
                        <img
                            src="/img/logo/logo.png"
                            width="200px"
                            height="50px"
                            alt="CHAMPOO-FANCLUB.png"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header
