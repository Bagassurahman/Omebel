import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import mail from '../../assets/images/mail.png'

// import Edukasi from '../../assets/images/edukasi.png'
import styles from './Join.module.css';

const Join = ({ show, handleShow, handleClose }) => {
    return (
        <>
        <Container className={`p-5`}>
            <div className={`${styles.bg}`}>
                <Row>
                    <Container className={`p-5`}>
                        <Row>
                            <Col lg={5} className={`mx-auto text-center`}>
                                <img className={`img-fluid`} src={mail} />
                            </Col>
                            <Col lg={7} className={`mx-auto  d-sm-none d-lg-block d-md-block d-none`}>
                                <h2 className={`${styles.title} text-white`}>Bergabung dengan kami untuk memajukan Indonesia</h2>
                                <InputGroup className="mb-3 mt-5 pr-5">
                                    <FormControl
                                    placeholder="Your work email address"
                                    aria-label="Your work email address"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                    {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
                                    <Button className={`btn btn-dark`}>Bergabung</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col lg={7} className={`mx-auto  d-sm-block d-lg-none d-md-none d-block`}>
                                <h2 className={`${styles.title} text-white text-center`}>Bergabung dengan kami untuk memajukan Indonesia</h2>
                                <InputGroup className="mb-3 mt-5 mx-auto">
                                    <FormControl
                                    placeholder="Your work email address"
                                    aria-label="Your work email address"
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button className={`btn btn-dark`}>Bergabung</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </div>
        </Container>
        </>
    );
};

Join.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default Join;