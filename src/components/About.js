import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './About.css';

const About = () => {
  const technicalSkills = [
    'React.js', 'Node.js', 'Flask', 'MySQL', 'JavaScript', 'Python',
    'LangChain', 'Machine Learning', 'AI Integration', 'Hardware Assembly',
    'Quality Assurance', 'Electrical Infrastructure'
  ];

  const achievements = [
    {
      title: "Industrial Attachment",
      description: "Assembled Taifa laptops and maintained electrical infrastructure in public institutions",
      icon: "🔧"
    },
    {
      title: "Community Volunteer",
      description: "International educational network volunteer and Equity Leaders Program mentor",
      icon: "🤝"
    },
    {
      title: "Full-Stack Developer",
      description: "Built and deployed scalable applications with modern web technologies",
      icon: "💻"
    },
    {
      title: "AI Enthusiast",
      description: "Contributing to ML and generative AI projects using cutting-edge technologies",
      icon: "🤖"
    }
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={4} className="text-center mb-4">
            <div className="profile-image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/images/Kennedy_img.jpg`} 
                alt="Kennedy Kamau Kamande" 
                className="profile-image img-fluid rounded-circle"
              />
            </div>
          </Col>
          <Col lg={8}>
            <div className="about-hero">
              <h1 className="display-4 mb-3">About Me</h1>
              <h2 className="h4 text-primary mb-4">Kennedy Kamau Kamande</h2>
              <p className="lead">
                A highly motivated and adaptable undergraduate pursuing a Bachelor of Science in 
                <strong> Electronic and Computer Engineering</strong> at Jomo Kenyatta University 
                of Agriculture and Technology.
              </p>
              <p className="fs-5">
                My passion lies at the intersection of <em>hardware, software, and artificial intelligence</em>—where 
                I develop practical solutions that combine engineering precision with emerging technologies.
              </p>
            </div>
          </Col>
        </Row>

        {/* Technical Expertise Section */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">
                  <i className="bi bi-code-square me-2"></i>
                  Technical Expertise
                </h3>
                <p className="mb-4">
                  My technical expertise spans <strong>full-stack web development</strong>, <strong>AI integration</strong>, 
                  and <strong>hands-on hardware experience</strong>. I've built and deployed scalable applications using 
                  modern technologies while contributing to machine learning and generative AI projects leveraging 
                  LangChain and large language models.
                </p>
                <div className="skills-badges">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2 p-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience & Achievements */}
        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">
              <i className="bi bi-trophy me-2"></i>
              Experience & Achievements
            </h3>
            <Row>
              {achievements.map((achievement, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm hover-card">
                    <Card.Body className="p-4">
                      <div className="text-center mb-3">
                        <span className="achievement-icon">{achievement.icon}</span>
                      </div>
                      <h5 className="card-title text-center mb-3">{achievement.title}</h5>
                      <p className="card-text text-center">{achievement.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Education & Hardware Experience */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h4 className="mb-3">
                  <i className="bi bi-mortarboard me-2"></i>
                  Education
                </h4>
                <h5 className="text-primary">Bachelor of Science</h5>
                <p className="mb-2"><strong>Electronic and Computer Engineering</strong></p>
                <p className="text-muted">
                  Jomo Kenyatta University of Agriculture and Technology (JKUAT)
                </p>
                <p>
                  Developing a strong foundation in both hardware and software engineering, 
                  with focus on emerging technologies and practical applications.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h4 className="mb-3">
                  <i className="bi bi-tools me-2"></i>
                  Hardware Experience
                </h4>
                <p>
                  Beyond software development, I have extensive hands-on hardware experience gained 
                  during my industrial attachments:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Assembled Taifa laptops with precision and quality control
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Maintained critical electrical infrastructure
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Quality assurance in manufacturing processes
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Community Impact */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-sm bg-light">
              <Card.Body className="p-4">
                <h3 className="mb-4">
                  <i className="bi bi-people me-2"></i>
                  Community Impact & Leadership
                </h3>
                <Row>
                  <Col md={6}>
                    <h5 className="text-primary mb-3">Community Involvement</h5>
                    <p>
                      I actively contribute to tech communities and mentorship programs, 
                      including volunteering with an international educational network. 
                      These experiences have strengthened my communication, teamwork, 
                      and leadership skills.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5 className="text-primary mb-3">Mentorship</h5>
                    <p>
                      Through the Equity Leaders Program, I guide high school scholars, 
                      helping them navigate their educational journey and develop essential 
                      life skills. This role has enhanced my ability to communicate complex 
                      concepts effectively.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Vision & Future */}
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 text-center">
                <h3 className="mb-4">
                  <i className="bi bi-lightbulb me-2"></i>
                  Vision & Future Goals
                </h3>
                <p className="lead mb-4">
                  I am continually exploring how technology can transform education, public services, 
                  and local communities. My goal is to bridge the gap between theoretical knowledge 
                  and practical applications that make a real difference.
                </p>
                <div className="future-goals">
                  <Row>
                    <Col md={4} className="mb-3">
                      <div className="goal-item">
                        <i className="bi bi-rocket-takeoff display-6 text-primary mb-2"></i>
                        <h5>Innovation</h5>
                        <p>Building future-ready solutions</p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="goal-item">
                        <i className="bi bi-globe display-6 text-success mb-2"></i>
                        <h5>Impact</h5>
                        <p>Transforming communities through technology</p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="goal-item">
                        <i className="bi bi-arrow-up-right display-6 text-info mb-2"></i>
                        <h5>Growth</h5>
                        <p>Continuous learning and adaptation</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <p className="mt-4">
                  <strong>I'm currently seeking opportunities</strong> where I can apply my engineering 
                  and software background to build meaningful, innovative solutions that address 
                  real-world challenges.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
