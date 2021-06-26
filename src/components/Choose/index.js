import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Umkm1 from '../../assets/images/umkm1.png';
import Umkm2 from '../../assets/images/umkm2.png';
import Umkm3 from '../../assets/images/umkm3.png';
import Bginvest from '../../assets/images/bg_invest.png';

import styles from './Choose.module.css';

const Choose = ({ show, handleShow, handleClose }) => {
    return (
        <>
        <Container>
            <div className={`pb-5 pt-5`}>
                <h2 className={`${styles.title}`}>Pilih UMKM Mebel</h2>
                <p className={`${styles.text}`}></p>
            </div>
        </Container>
        <Jumbotron fluid className={`${styles.jumbotron}`}>
            <Container>
                
                <Row>
                    <Col lg={6}>
                        <Container>
                            <img className={`img-fluid`} src={Umkm1}/>
                            <div className={`pt-3`}>
                                <Row>
                                    <Col lg={7}>
                                        <a className={`text-decoration-none ${styles.name}`} href="#">PT Jepara Internasional</a>
                                        <p className={`${styles.loc}`}>Jl Jepara Raya RT 9/8 No.15, Jepara Kota</p>
                                    </Col>
                                </Row>
                            </div>
                            <h4 className={`${styles.progres}  text-center pt-2`}>Mulai Dari Rp 0</h4>
                            <div className={`progress progress-striped active`}>
                                <div className={`progress-bar progress-bar-warning ${styles.bar} ${styles.warning} ${styles.progressbar}`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <div className="footer pt-5">
                                    <div className={`${styles.danper} float-left text-left`}>
                                        <p>Total Pendanaan <br/> <span class={`${styles.txt}`}>Rp 1.000.000.000,00</span></p>
                                    </div>
                                    <div className={`${styles.danper} float-right text-right`}>
                                        <p>Periode Dividen <br/> <span class={`${styles.txt}`}>6 Bulan</span></p>
                                    </div>
                            </div>
                        </Container>
                    </Col>
                    <Col lg={3}>
                        <Container>
                            <img className={`img-fluid ${styles.img}`} src={Umkm2}/>
                            <div className={`pt-3`}>
                                <a className={`text-decoration-none ${styles.name}`} href="#">PT Jaya Mebel</a>
                                <p className={`${styles.loc}`}>Jl. Jaya  Rt 6/1 No.15, kudus</p>
                            </div>
                            <h4 className={`${styles.progres}  text-center pt-2`}>Mulai Dari Rp 0</h4>
                            <div className={`progress progress-striped active`}>
                                <div className={`progress-bar progress-bar-warning ${styles.bar} ${styles.warning} ${styles.progressbar}`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <div className="footer pt-5">
                                    <div className={`${styles.danper} float-left text-left`}>
                                        <p>Total Pendanaan <br/> <span class={`${styles.txt}`}>Rp 1.000.000.000,00</span></p>
                                    </div>
                                    <div className={`${styles.danper} float-right text-right`}>
                                        <p>Periode Dividen <br/> <span class={`${styles.txt}`}>6 Bulan</span></p>
                                    </div>
                            </div>
                        </Container>
                    </Col>
                    <Col lg={3}>
                        <Container>
                            <img className={`img-fluid ${styles.img}`} src={Umkm3}/>
                            <div className={`pt-3`}>
                                <a className={`text-decoration-none ${styles.name}`} href="#">PT Alpha Furniture</a>
                                <p className={`${styles.loc}`}>Jl. Mangga  Rt 6/1 No.15, Kalimantan</p>
                            </div>
                            <h4 className={`${styles.progres}  text-center pt-2`}>Mulai Dari Rp 0</h4>
                            <div className={`progress progress-striped active`}>
                                <div className={`progress-bar progress-bar-warning ${styles.bar} ${styles.warning} ${styles.progressbar}`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <div className="footer pt-5">
                                    <div className={`${styles.danper} float-left text-left`}>
                                        <p>Total Pendanaan <br/> <span class={`${styles.txt}`}>Rp 1.000.000.000,00</span></p>
                                    </div>
                                    <div className={`${styles.danper} float-right text-right`}>
                                        <p>Periode Dividen <br/> <span class={`${styles.txt}`}>6 Bulan</span></p>
                                    </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Container>
            <Row className={`pt-3`}>
                <div className="button mx-auto">
                    <button className={`${styles.btnoutline} `}>Lebih Banyak</button>
                </div>
            </Row>
        </Container>
        </>
    );
};


Choose.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Choose;