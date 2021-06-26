import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Img from '../../assets/images/BG.png'
import styles from './Member.module.css';

const Member = ({ show, handleShow, handleClose }) => {
    return (
        <Jumbotron fluid className={styles.jumbotron}>
            <Container>
                <Row xs={1} lg={2} md={2}>
                    <Col lg={7} className="my-auto">
                        <Card className={styles.cards}>
                            <div class="p-5">
                                <div className="pr-lg-5">
                                    <h4 className={styles.title}>Platform yang  memudahkan para UMKM Mebel</h4>
                                    <p className={`pt-5 text-justify mr-5 ${styles.desc}`}>UMKM Mebel dapat mengembangkan atau memulai usaha mereka dengan bantuan dana dari investor, dan mereka juga dapat menjual produk mereka ke dalam marketplace, serta dapat edukasi seputar bisnis.</p>
                                    <Row xs={3} lg={3} md={3} className="pt-4">
                                        <Col>
                                            <h6 className="text-center"><p className={styles.sum}>50.000+</p> Bisnis Terdaftar</h6>
                                        </Col>
                                        <Col>
                                            <h6 className="text-center"><p className={styles.sum}>50.000+</p> Bisnis Mendaftar</h6>
                                        </Col>
                                        <Col>
                                            <h6 className="text-center"><p className={styles.sum}>50.000+</p> Member Terdaftar</h6>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={5} className="my-auto d-sm-none d-md-none d-lg-block d-none">
                        <img className={`${styles.img} img-fluid`} src={Img}/>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

Member.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Member;