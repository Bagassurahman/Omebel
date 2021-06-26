import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'
import styles from './Navigasi.module.css';

const Navigasi = ({ show, handleShow, handleClose }) => {
    return(
        <>
        <Navbar sticky="top" expand="lg" className={styles.navbar}>
            <Container>
                <Link to="/">
                    <Navbar.Brand href="#home" className={styles.navbarBrand}>
                        <img className="img-fluid" src={Logo}/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto menu">
                    <Nav.Link exact className={`${styles.navlink}`} activeClassName="active" href="/" to="/">Home</Nav.Link>
                    <Nav.Link className={`${styles.navlink} ml-lg-4`} activeClassName="active" href="#link">Investasi</Nav.Link>
                    <Nav.Link className={`${styles.navlink} ml-lg-4`} activeClassName="active" href="#edukasi">Edukasi</Nav.Link>
                    <Nav.Link className={`${styles.navlink} ml-lg-4`} activeClassName="active" href="#link">Marketplace</Nav.Link>
                    <Nav.Link className={`${styles.navlink} ml-lg-4`} activeClassName="active" href="/contact" to="/contact">Contact Us</Nav.Link>

                    </Nav>

                    <Button variant={`outline-warning`}>Login</Button>
                    <Button className="ml-4 text-white" variant="warning">Sign Up</Button>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>

        
        </>
    )
}

Navigasi.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
}
export default Navigasi