import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FlintLogo from "../../assets/flint-logo.png";
import GithubIcon from "../../assets/github-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";

const Footer = () => {
    return (
        <footer className="text-light py-4 bg-black-300">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="d-flex justify-content-start align-items-center">
                            <Col xs={1}>
                                <Image
                                    width={50}
                                    height={50}
                                    src={FlintLogo} />
                            </Col>
                            <Col className="align-items-center">
                                <h1 className="text-accent ms-3 text-no-underline">Flint Labs</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column align-items-end">
                        <h5>Utkarsh Tiwari</h5>
                        <p className='text-end'>
                            <strong>Mobile:</strong> +91 9118827966<br />
                            <strong>Email:</strong> f20200458@pilani.bits-pilani.ac.in
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://github.com/UT-03" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={GithubIcon} />
                                </a>
                            </li>
                            <li className="list-inline-item ms-2">
                                <a href="https://www.linkedin.com/in/utkarsh-tiwari-388011210" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={LinkedinIcon} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
