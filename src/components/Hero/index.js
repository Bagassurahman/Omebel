import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Img from '../../assets/images/jmb.png'
import styles from './Hero.module.css';

const Hero = ({ show, handleShow, handleClose }) => {
    return (
        <Jumbotron fluid className={styles.jumbotron}>
            <Container>
                <Row xs={1} lg={2} >
                    <Col className="my-auto">
                        <h1 className={styles.title}>Platform yang  memudahkan para UMKM Mebel</h1>
                        <p className={`${styles.desc} mt-5`}>
                        UMKM Mebel dapat mengembangkan atau memulai usaha mereka dengan bantuan dana dari investor, dan mereka juga dapat menjual produk mereka ke dalam marketplace, serta dapat edukasi seputar bisnis.
                        </p>
                        <button className={`${styles.btn} btn btn-warning`}>Get Started</button>
                    </Col>
                    <Col className=" d-sm-none d-md-none d-lg-block d-none">
                        <img className="img-fluid" src={Img}/>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

Hero.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Hero