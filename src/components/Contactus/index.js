import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button, Modal, Container, Card, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'
import styles from './Contactus.module.css';

const Contactus = ({ show, handleShow, handleClose }) => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={6} style={{ backgroundColor:"#39414E", borderRadius:"10px", boxShadow:"0px 4px 70px rgba(0, 0, 0, 0.1)" }}>
                    <Container className={`p-5 text-white`}>
                        <h2 className={`${styles.title}`}>Hubungi Kami</h2>
                        <p className={`${styles.desc} mt-2`}>Hubungi kami melalui kontak di bawah ini, atau bisa mengisi formulir yang tersedia</p>
                        {/* <div>
                            <a href=""><i class="fas fa-phone-alt mr-5"></i> (+62) 812345678</a>
                            <a href=""><i class="far fa-envelope"></i> (+62) 812345678</a>
                            <a href=""><i class="fas fa-phone-alt"> (+62) 812345678</i></a>
                        </div> */}
                        <ul className={`list-unstyled mt-5`}>
                            <li className={`mt-5`}>
                                <a className={`${styles.li} text-decoration-none`} href=""><i class="fas fa-phone-alt mr-5"></i> (+62) 812345678</a>
                            </li>
                            <li className={`mt-5`}>
                                <a className={`${styles.li} text-decoration-none`} href=""><i class="far fa-envelope mr-5"></i> omebel@gmail.com</a>
                            </li>
                            <li className={`mt-5`}>
                                <a className={`${styles.li} text-decoration-none`} href=""><i class="far fa-envelope mr-5"></i> Purwokerto, Banyumas</a>
                            </li>
                        </ul>
                    </Container>
                </Col>
                <Col lg={6} style={{ backgroundColor:"white", borderRadius:"10px", boxShadow:"0px 4px 70px rgba(0, 0, 0, 0.1)" }}>
                    <Container className={`p-5`}>
                        <Form>
                            <Form.Group className={`mt-4`} controlId="formBasicName">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan Nama" />
                            </Form.Group>
                            <Form.Group className={`mt-4`} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan email" />
                            </Form.Group>
                            <Form.Group className={`mt-4`} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Pesan</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            
                            <Button className={`mt-5`} variant="warning" type="submit" style={{ width:"100%", background: "#F48C06", border: "none", color:"white" }}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

Contactus.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Contactus;