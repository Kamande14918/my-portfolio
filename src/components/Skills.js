import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
  { title: "HTML5", description: "Semantic and accessible markup" },
  { title: "CSS3", description: "Responsive and modern design" },
  { title: "Javascript", description: "Dynamic and interactive features" },
  { title: "Node.js", description: "Server-side JavaScript" },
  { title: "React", description: "Javascript Component based framework" },
  { title: "Generative AI", description: "Art and music generation" },
  { title: "Python", description: "General purpose programming language" },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="mb-4">Skills</h2>
        <Row>
          {skills.map((skill, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

