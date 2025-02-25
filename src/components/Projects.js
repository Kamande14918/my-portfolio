import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  { title: "Project 1", description: "Description of project 1", image: "path_to_image.jpg", url: "https://project1.com" },
  { title: "Project 2", description: "Description of project 2", image: "path_to_image.jpg", url: "https://project2.com" },
  { title: "Project 3", description: "Description of project 3", image: "path_to_image.jpg", url: "https://project3.com" },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className='py-5 bg-light'>
      <Container>
        <h2 className="mb-4">Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.url}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;