import React, {Component} from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

//import logo from '../resource/image/logo.jpg';
//let logo = require('../resource/image/logo.jpg');

class Header extends Component
{
    render(){
        let enlaces = [
            /*{name: 'Home', url: '/'},*/
            {name: 'Buscador', url: '/buscador', key: 'buscador'},
            {name: 'About', url: '/about', key: 'about'}
        ];

        return (
            <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand key="index">
                    <LinkContainer to="/" key="index">
                        <Nav.Link>
                            <img alt="logo" src={require('../resource/image/logo.jpg')} width="30" height="24" className="d-inline-block align-top" />
                            &nbsp;
                            FICTICIA News
                        </Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    { enlaces.map((enlace) => 
                            <LinkContainer key={enlace.key} to={enlace.url}>
                                <Nav.Link>{enlace.name}</Nav.Link>
                            </LinkContainer>
                        ) }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}
export default Header;