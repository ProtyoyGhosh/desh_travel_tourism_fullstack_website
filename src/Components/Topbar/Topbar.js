import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Topbar.css';

const Topbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='topbar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Desh Travels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar">
                            <Nav.Link><Link className='links' to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/aboutus'>About Us</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/services'>Services</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/myorders'>My Orders</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                    <Nav.Link onClick={logOut}><small>Hello : </small>{user?.displayName}<Link className='links' to='login'>Log Out</Link></Nav.Link>
                                    :
                                    <Nav.Link><Link className='links' to='login'>Log In</Link></Nav.Link>
                            }


                            {/* <Nav.Link><Link className='links' to='login'>Log In</Link></Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Topbar;