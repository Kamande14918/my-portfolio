import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import ImageSlider from './ImageSlider';
import './Projects.css';

const projects = [
  { 
    title: "Advanced Mobile Diagnostic Tool – Intelligent Android Device Troubleshooting Suite", 
    shortDescription: "Cross-platform diagnostic application for Android device troubleshooting with wireless ADB connectivity and comprehensive system diagnostics.",
    description: "A cross-platform diagnostic application designed to identify and resolve complex Android device issues such as faulty USB ports, boot loops, no display, and system instability. Built with a React frontend and Flask backend, the tool offers real-time device monitoring, wireless ADB connectivity, recovery utilities, and comprehensive system diagnostics—all accessible through a clean, modular interface.",
    images: [
      `${process.env.PUBLIC_URL}/images/diagnostic-tool-1.png`,
      `${process.env.PUBLIC_URL}/images/diagnostic-tool-2.png`,
      `${process.env.PUBLIC_URL}/images/diagnostic-tool-3.png`,
      `${process.env.PUBLIC_URL}/images/diagnostic-tool-4.png`,
      `${process.env.PUBLIC_URL}/images/diagnostic-tool-5.png`
    ],
    image: `${process.env.PUBLIC_URL}/images/diagnostic-tool-1.png`, // Fallback for single image display
    url: "https://github.com/Kamande14918/advanced-mobile-diagnostic-tool",
    features: [
      "Core Diagnostics: Retrieve device metadata (model, manufacturer, Android version, build number)",
      "Advanced Issue Resolution: Diagnose faulty USB ports using wireless ADB and Bluetooth alternatives",
      "Boot Loop Resolution: Resolve boot loops and hanging issues via safe/recovery mode",
      "Display Diagnostics: Address no-display problems with backlight testing and ADB-based fixes",
      "Wireless Connectivity: Enable WiFi ADB for USB-free diagnostics and network device scanning",
      "Recovery & Repair Tools: Boot into recovery or fastboot mode for advanced operations",
      "Data Management: Backup and restore device data and apps with comprehensive logging",
      "Real-time Monitoring: Monitor CPU, memory, storage, and battery health in real-time",
      "Security & Privacy: Local-only execution with no external data transmission",
      "Cross-platform Support: Works on Windows, macOS, and Linux with modular architecture"
    ],
    technologies: ["React.js", "Python", "Flask", "Flask-CORS", "ADB (Android Debug Bridge)", "Node.js", "PowerShell", "RESTful API"],
    github: "https://github.com/Kamande14918/advanced-mobile-diagnostic-tool",
    demo: null
  },
  { 
    title: "CBC Smart Learning App – AI-Powered Personalized Education for Kenya's CBC", 
    shortDescription: "An interactive, AI-driven educational platform tailored for Kenya's Competency-Based Curriculum (CBC). The app delivers personalized learning experiences through adaptive study plans, real-time progress tracking, gamification, and collaborative tools.",
    description: "An interactive, AI-driven educational platform tailored for Kenya's Competency-Based Curriculum (CBC). The app delivers personalized learning experiences through adaptive study plans, real-time progress tracking, gamification, and collaborative tools. It empowers students, teachers, and parents with actionable insights and multilingual support to enhance learning outcomes.", 
    images: [`${process.env.PUBLIC_URL}/images/CBC-SmartLearning.jpg`],
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
    images: [`${process.env.PUBLIC_URL}/images/Blog-app.png`],
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
  }
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
                  <ImageSlider
                    images={project.images || [project.image]}
                    alt={project.title}
                    height="250px"
                    showIndicators={project.images && project.images.length > 1}
                    showControls={project.images && project.images.length > 1}
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
                <ImageSlider
                  images={selectedProject.images || [selectedProject.image]}
                  alt={selectedProject.title}
                  height="350px"
                  showIndicators={true}
                  showControls={true}
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