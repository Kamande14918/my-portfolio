import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                    <h1 className="animate__animated animate_fadeInDown">Hello, I'm Kennedy Kamande</h1>
                    <p className="lead animate__animated animate__fadeInUp">
                        A passionate developer crafting digital experiences.
                    </p>
                    </Col>
                    <Col md={6}>
                    {/*You can include an image or an illustration. */}
                    <img src="path_to_your_image.jpg" alt="Hero" className="img-fluid animate__animated animate_zoomIn" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
