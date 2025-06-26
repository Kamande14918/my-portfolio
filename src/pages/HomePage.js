import React from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const quickHighlights = [
    {
      title: "Full-Stack Developer",
      description: "React.js, Node.js, Python & Database Expert",
      icon: "💻",
      link: "/skills"
    },
    {
      title: "AI Integration",
      description: "Machine Learning & LangChain Implementation",
      icon: "🤖",
      link: "/skills"
    },
    {
      title: "Hardware Engineer",
      description: "Electronics & Computer Engineering Student",
      icon: "🔧",
      link: "/about"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      
      {/* Quick Overview - What I Do */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="mb-3">What I Bring to the Table</h2>
              <p className="lead text-muted">
                Combining engineering precision with modern software development
              </p>
            </Col>
          </Row>
          <Row>
            {quickHighlights.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3" style={{fontSize: '3rem'}}>{item.icon}</div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted mb-3">{item.description}</p>
                    <Link to={item.link}>
                      <Button variant="outline-primary" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="mb-3">Recent Work</h2>
              <p className="text-muted">Check out some of my latest projects</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={`${process.env.PUBLIC_URL}/images/CBC-SmartLearning.jpg`} 
                  alt="CBC SmartLearning Platform"
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <Card.Body>
                  <h5>CBC SmartLearning Platform</h5>
                  <p className="text-muted">Educational platform enhancing learning experiences</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={`${process.env.PUBLIC_URL}/images/Blog-app.png`} 
                  alt="Blog Application"
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <Card.Body>
                  <h5>Blog Application</h5>
                  <p className="text-muted">Modern blog platform with full CRUD functionality</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col>
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View All Projects
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mb-3">Ready to Work Together?</h2>
              <p className="lead mb-4">
                Let's build something amazing with cutting-edge technology
              </p>
              <div>
                <Link to="/about" className="me-3">
                  <Button variant="light" size="lg">
                    About Me
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline-light" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
