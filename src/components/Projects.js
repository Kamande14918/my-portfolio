import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import './Projects.css';

const projects = [
  { 
    title: "CBC Smart Learning App – AI-Powered Personalized Education for Kenya's CBC", 
    shortDescription: "An interactive, AI-driven educational platform tailored for Kenya's Competency-Based Curriculum (CBC). The app delivers personalized learning experiences through adaptive study plans, real-time progress tracking, gamification, and collaborative tools.",
    description: "An interactive, AI-driven educational platform tailored for Kenya's Competency-Based Curriculum (CBC). The app delivers personalized learning experiences through adaptive study plans, real-time progress tracking, gamification, and collaborative tools. It empowers students, teachers, and parents with actionable insights and multilingual support to enhance learning outcomes.", 
    image: `${process.env.PUBLIC_URL}/images/CBC-SmartLearning.jpg`, 
    url: "https://project1.com",
    features: [
      "Personalized Learning Experience: AI-powered adaptive learning based on student performance and engagement",
      "Hybrid Study Plans: Combining AI recommendations and teacher-defined paths",
      "Self-paced and Timed Modules: Flexible learning options for different student needs",
      "Parental and Teacher Involvement: Dashboards for monitoring student progress with AI-generated study tips",
      "Gamification & Motivation: Badges, leaderboards, and virtual certificates to boost engagement",
      "Collaboration & Peer Learning: Group work tools and discussion forums with AI-suggested topics",
      "Career Guidance & Subject Recommendations: AI-based career suggestions aligned with student interests",
      "Multilingual Support: Kiswahili and English content with translation and audio support",
      "Interactive Learning Enhancements: Audio lessons and AI-curated content based on student behavior",
      "Monitoring & Reporting System: Real-time analytics for students, teachers, and parents"
    ],
    technologies: ["React.js", "Node.js", "Express", "MySQL", "Python (AI/ML)", "Firebase/AWS"],
    github: "https://github.com/Kamande14918/cbc-smart-learning-app",
    demo: null
  },
  { 
    title: "Blog App", 
    shortDescription: "Social blogging platform with user interactions",
    description: "A full-featured blogging platform built with Flask that enables users to create, share, and engage with content in a social environment. The app supports user authentication, multimedia uploads, post interactions (likes, comments, upvotes), and community-driven features like channels and spaces.",
    features: [
      "User Authentication: Secure registration and login system with session management",
      "Post Management: Create, edit, and delete blog posts with support for rich media (images/videos)",
      "Social Interactions: Like, comment, upvote/downvote posts to foster engagement",
      "Follow System: Users can follow/unfollow others to personalize their feed",
      "Spaces & Channels: Organize content into thematic spaces and channels for community building",
      "User Profiles: View and manage personal information, posts, and activity",
      "Media Uploads: Upload and display images and videos within posts",
      "Responsive UI: Clean, user-friendly interface built with HTML, CSS, and Mako templates"
    ],
    technologies: ["Python", "Flask", "SQLAlchemy", "HTML5", "CSS3", "Mako Templates", "SQLite", "Flask-Migrate", "Flask-Login", "WTForms"],
    image: `${process.env.PUBLIC_URL}/images/Blog-app.png`, 
    github: "https://github.com/Kamande14918/blog-app",
    demo: null
  },
  // { 
  //   title: "Project 3", 
  //   shortDescription: "Description of project 3",
  //   description: "Description of project 3", 
  //   image: "/images/project3.png", 
  //   url: "https://project3.com",
  //   features: [],
  //   technologies: [],
  //   github: null,
  //   demo: null
  // },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className='py-5 bg-light'>
      <Container>
        <h2 className="mb-4">Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm project-card">
                <div className="project-image-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-project.png`;
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5">{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.shortDescription}
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleShowDetails(project)}
                    className="mt-auto"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div>
              <div className="text-center mb-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px' }}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-project.png`;
                  }}
                />
              </div>
              
              <h5>Description</h5>
              <p className="text-muted mb-4">{selectedProject.description}</p>
              
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h5>Key Features</h5>
                  <ul>
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-4">
                  <h5>Technologies Used</h5>
                  <div>
                    {selectedProject.technologies.map((tech, i) => (
                      <Badge key={i} bg="secondary" className="me-1 mb-1">{tech}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            {selectedProject?.github && (
              <Button variant="outline-primary" href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i>GitHub
              </Button>
            )}
            {selectedProject?.demo && (
              <Button variant="primary" href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt me-2"></i>Live Demo
              </Button>
            )}
            {selectedProject?.url && !selectedProject?.github && (
              <Button variant="primary" href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt me-2"></i>View Project
              </Button>
            )}
          </div>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;