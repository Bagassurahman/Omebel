import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Investasi from '../../assets/images/investasi.png'
import Edukasi from '../../assets/images/edukasi.png'
import Market from '../../assets/images/market.png'
import styles from './Advantage.module.css';

const Advantage = ({ show, handleShow, handleClose }) => {
    return (
        <Container className={`pt-5`}>
            <div className={`text-center`}>
                <h2 className={`${styles.titletop}`}>Keuntungan Memakai Platform Kami</h2>
            </div>
            <Row lg={3} md={3} xs={1} className={`pt-5`}>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Investasi}/>
                            <h4 className={`mt-3 ${styles.title}`}>Investasi</h4>
                            <p className={`${styles.desc}`}>Kami menerapkan sistem investasi syariah yang dimana nantinya hasil akan dibagi secara adil dengan investor</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lebih Lanjut <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Edukasi}/>
                            <h4 className={`mt-3 ${styles.title}`}>Edukasi</h4>
                            <p className={`${styles.desc}`}>Sebagai sarana untuk menambah pengetahuan baik untuk pengguna maupun UMKM seputar finansial , serta tips dan trik</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lebih Lanjut <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Market}/>
                            <h4 className={`mt-3 ${styles.title}`}>Marketplace</h4>
                            <p className={`${styles.desc}`}>Dimana UMKM dapat menjual hasil produk mereka secara online dengan mudah.</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lebih Lanjut <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

Advantage.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Advantage;