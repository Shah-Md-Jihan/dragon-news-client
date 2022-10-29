import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        providerLogOut()
            .then(() => {
                // console.log('sign out successful')
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="text-decoration-none text-white">
                            DragonNews
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>

                                {
                                    user?.uid ? user?.email
                                        :
                                        <Link to='/login' className="text-decoration-none text-white me-2">Login</Link>
                                }
                                {
                                    user?.uid ? '' : <Link to='/register' className="text-decoration-none text-white me-2">Register</Link>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                {console.log(user)}
                                {user?.photoURL ?
                                    <>
                                        <Image src={user?.photoURL} style={{ height: '30px' }} roundedCircle></Image>
                                    </>
                                    :
                                    <>
                                        <FaUserAlt></FaUserAlt>
                                    </>

                                }
                                {
                                    user?.email ? <Button onClick={handleSignOut} variant='light' className="ms-3">Sign Out</Button>
                                        : ''
                                }

                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;