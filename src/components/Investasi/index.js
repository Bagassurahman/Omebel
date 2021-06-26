import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Modal from '../../assets/images/modal.png';
import Bginvest from '../../assets/images/bg_invest.png';

import styles from './Investasi.module.css';

const Investasi = ({ show, handleShow, handleClose }) => {
    return (
        <Jumbotron fluid className={`pt-5 ${styles.jumbotron}`}>
            <Container>
                <div className={`text-center`}>
                    <h2 className={`${styles.titletop}`}>Investasi</h2>
                </div>
                <Row lg={2} md={2} xs={1} className={`pt-5`}>
                    <Col lg={6}>
                        <img className={`img-fluid`} src={Modal} />
                    </Col>
                    <Col lg={6} className={`my-auto`}>
                        <h4 className={` ${styles.title}`}>Tanam Modal</h4>
                        <p className={` ${styles.desc}`}>Disini para investor dapat menanamkan modalnya kepada umkm yang ingin memulai dan mengembangkan usahanya dengan proses yang mudah dan cepat. Hasil yang didapatkan juga sangat atraktif bagi investor.</p>
                        <Button className={`btn btn-warning mt-5 ${styles.btn}`}>Berikan Modal</Button>
                    </Col>
                </Row>
                <Row lg={2} md={2} xs={1} className={`pt-5`}>
                    <Col lg={6} className={`d-sm-block d-md-none d-lg-none d-block`}>
                        <img className={`img-fluid`} src={Bginvest} />
                    </Col>
                    <Col lg={6} className={`my-auto`}>
                        <h4 className={` ${styles.title}`}>Investasi</h4>
                        <p className={` ${styles.desc}`}>Kami disini menggunakan sistem online investasi syariah yang dimana nantinya hasil akan dibagi secara adil dengan investor dan memudahkan investor dalam berinvestasi, serta investasi ini bersifat transparan sehingga investor dapat melihat laporan keuangan yang diperlukan.</p>
                        <Button className={`btn btn-warning mt-5 ${styles.btn}`}>Investasi</Button>
                    </Col>
                    <Col lg={6} className={`d-sm-none d-md-block d-lg-block d-none`}>
                        <img className={`img-fluid`} src={Bginvest} />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

Investasi.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Investasi;