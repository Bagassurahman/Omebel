import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from "react-bootstrap";
import meja from '../../assets/images/meja.png'
import kursi from '../../assets/images/kursi.png'
import lemari from '../../assets/images/lemari.png'
import kasur from '../../assets/images/kasur.png'
import pintu from '../../assets/images/pintu.png'
import bangku from '../../assets/images/bangku.png'
import sofa from '../../assets/images/sofa.png'
import Arrow from '../../assets/images/right-arrow.png'

// import Edukasi from '../../assets/images/edukasi.png'
import styles from './Marketplace.module.css';
const Marketplace = ({ show, handleShow, handleClose }) => {
    return (
        <>
            <Container className={`pt-5`}>
                <div className={`text-center`}>
                    <h2 className={`${styles.titletop}`}>Marketplace</h2>
                </div>
                <Row lg={4} xs={2}>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Meja</h4>
                                <img className={`img-fluid pt-5`} src={meja} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Kursi</h4>
                                <img className={`img-fluid pt-5`} src={kursi} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Lemari</h4>
                                <img className={`img-fluid pt-5`} src={lemari} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Kasur</h4>
                                <img className={`img-fluid pt-5`} src={kasur} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row lg={4} xs={2} className={`mt-4`}>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Pintu</h4>
                                <img className={`img-fluid pt-5`} src={pintu} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Bangku</h4>
                                <img className={`img-fluid pt-5`} src={bangku} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <Card className={`${styles.card}`}>
                            <Card.Body>
                                <h4 className={`${styles.title}`}>Sofa</h4>
                                <img className={`img-fluid pt-5`} src={sofa} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} xs={6} className={`mt-4`}>
                        <a className={`text-decoration-none`} href="">
                            <Card className={`${styles.card}`}>
                                <Card.Body>
                                    <h4 className={`${styles.a}`}>Lihat Lainnya</h4>
                                    <img className={`img-fluid pt-5`} src={Arrow} />
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Marketplace.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Marketplace;