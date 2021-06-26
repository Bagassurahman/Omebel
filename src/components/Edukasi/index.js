import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Tata from '../../assets/images/tata.png'
import Invest from '../../assets/images/invest.png'
import Keuangan from '../../assets/images/keuangan.png'
// import Edukasi from '../../assets/images/edukasi.png'
import styles from './Edukasi.module.css';

const Edukasi = ({ show, handleShow, handleClose }) => {
    return (
        <>
        <Container className={`pt-5`}>
            <div className={`text-center`}>
                <h2 className={`${styles.titletop}`}>Edukasi</h2>
            </div>
            <Row lg={3} md={3} xs={1} className={`pt-5`}>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Tata}/>
                            <h4 className={`mt-3 ${styles.title}`}>Menata ruang tamu  menjadi minimalis</h4>
                            <p className={`${styles.desc}`}>Menata ruang tamu agar minimalis memang tidak mudah,diperlukan perpaduan furniture yang pas.</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lihat <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Invest}/>
                            <h4 className={`mt-3 ${styles.title}`}>Cara UMKM mendapatkan modal sekaligus investasi</h4>
                            <p className={`${styles.desc}`}>Cara agar UMKM mendapatkan modalnya serta investasi untuk investor.</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lihat <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className={`p-2 ${styles.card}`}>
                        <Card.Body>
                            <img className={`img-fluid`} src={Keuangan}/>
                            <h4 className={`mt-3 ${styles.title}`}>Mengelola keuangan dengan benar</h4>
                            <p className={`${styles.desc}`}>Pentingnya mengelola keuangan agar masa depan lebih baik.</p>
                            <a className={`${styles.more} text-decoration-none`} href="#">Lihat <i class="fas fa-long-arrow-alt-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className={`pt-3`}>
                <div className="button mx-auto">
                    <button className={`${styles.btnoutline} `}>Lihat Semua</button>
                </div>
            </Row>
        </Container>
        </>
    );
};

Edukasi.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Edukasi;