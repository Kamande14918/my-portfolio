import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                    <h1 className="animate__animated animate_fadeInDown">Hello, I'm Kennedy Kamau Kamande</h1>
                    <p className="lead animate__animated animate__fadeInUp">
                        🚀 Building Web Solutions. ⚙️ Debugging Dreams. 🎯Delivering Value.
                    </p>
                    </Col>
                    <Col md={6}>
                    {/* Hero image */}
                    <img src={`${process.env.PUBLIC_URL}/images/Ken_img.jpg`} alt="Kennedy Kamau Kamande" className="img-fluid animate__animated animate_zoomIn" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
