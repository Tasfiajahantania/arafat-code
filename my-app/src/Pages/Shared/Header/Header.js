import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/logo/logo.png';
import '../Header/Header.css';
import { FaUserAlt, FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Navbar bg="white" expand="lg" className='mb-4 shadow'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'><Image className='logo' src={logo}></Image></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto lg-po right-side">
                        <Link to='/' className='nav-link fw-bold'>Home</Link>
                        <Link to='/course' className='nav-link fw-bold'>Course</Link>
                        <Link to='/blog' className='nav-link fw-bold'>Blog</Link>
                        <Link to='/faq' className='nav-link fw-bold'>FAQ</Link>
                        <Link to='/login' className='nav-link fw-bold'>Login</Link>
                        <Button className="btn btn-light"><FaMoon></FaMoon>Dark Mode</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;