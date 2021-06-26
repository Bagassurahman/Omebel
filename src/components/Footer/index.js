import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/Logo_white.png'

import styles from './Footer.module.css';

const Footer = props => {
    return (
        <footer className={`text-center text-white`} style={{ backgroundColor: "#39414E", backgroundSize:"cover" }}>
            <Container className={`pt-5`}>
                <div>
                    <img className={`img-fluid`} src={Logo} />
                </div>
                <section className={`mt-5 ${styles.a}`}>

                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >About</a>
                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >Investasi</a>
                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >Edukasi</a>
                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >Marketplace</a>
                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >Help</a>
                    <a
                        className={`${styles.a} btn btn-link btn-floating btn-lg text-white m-1`}
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="white"
                        >Privacy Policy</a>

                    </section>
                    <p className={`${styles.hr} mt-2`}></p>
                    <section
                        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        <div class="d-block">
                        <span>© 2021 <a className={`text-white`} href="/">Omebel</a>. All rights reserved</span>
                        </div>
                        <div>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="ml-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                        </div>

                    </section>
            </Container>
        </footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;