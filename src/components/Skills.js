import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
  { title: "HTML5", description: "Crafting semantic, accessible, and SEO-friendly web page structures for robust and maintainable websites." },
  { title: "CSS3", description: "Designing responsive, visually appealing user interfaces with modern layouts, animations, and best practices." },
  { title: "JavaScript", description: "Building dynamic, interactive web applications using ES6+ features, event-driven programming, and APIs." },
  { title: "React.js", description: "Developing scalable, component-based single-page applications with hooks, state management, and routing." },
  { title: "Node.js", description: "Creating efficient, scalable server-side applications and RESTful APIs using asynchronous JavaScript." },
  { title: "Python", description: "Writing clean, efficient code for web backends, automation, and data processing; experienced with Flask." },
  { title: "Flask", description: "Building lightweight, RESTful web APIs and backend services for modern web and AI applications." },
  { title: "MySQL", description: "Designing and managing relational databases, writing optimized queries, and ensuring data integrity." },
  { title: "MongoDB", description: "Implementing flexible, scalable NoSQL databases for modern web applications and rapid prototyping." },
  { title: "Generative AI", description: "Exploring and building applications with large language models (LLMs), LangChain, and AI-powered chatbots." },
  { title: "Machine Learning", description: "Applying ML algorithms and deep learning techniques for data analysis, prediction, and automation." },
  { title: "Continuous Learning", description: "Staying updated with the latest technologies and best practices in software development and AI." }
];

const featuredProject = {
  name: "CBC Smart Learning App",
  shortDescription: "An AI-driven educational platform that personalizes learning for Kenya's Competency-Based Curriculum. Features include adaptive learning algorithms, real-time progress tracking, gamification, collaborative tools, and multilingual support. Built with React, Node.js, MySQL, and Python AI models.",
  description: `A comprehensive, interactive learning platform that personalizes education through AI-powered adaptive learning, real-time progress tracking, and collaborative features. The app bridges the gap between traditional and modern education by providing hybrid learning experiences that adapt to each student's unique learning pace and style.`,
  features: [
    "AI-Powered Personalization: Adaptive learning algorithms that customize study plans based on student performance and engagement.",
    "Multi-Stakeholder Dashboard: Dedicated interfaces for students, parents, and teachers with real-time progress monitoring.",
    "Gamification System: Badges, leaderboards, and virtual certificates to boost student motivation and engagement.",
    "Collaborative Learning: Peer collaboration tools, discussion forums, and AI-generated topic suggestions.",
    "Career Guidance: AI-based career recommendations and subject suggestions aligned with student interests.",
    "Multilingual Support: Bilingual content (English/Kiswahili) with audio support for enhanced accessibility.",
    "Real-Time Analytics: Comprehensive reporting system providing insights on strengths, weaknesses, and learning trends."
  ],
  techStack: ["React.js", "Node.js", "Express", "MySQL", "Python (AI/ML)", "Firebase/AWS"]
};

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
        {/* Featured Project Section */}
        <div className="mt-5">
          <h3 className="mb-3">Featured Project: {featuredProject.name}</h3>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>{featuredProject.name}</Card.Title>
              <Card.Text><strong>{featuredProject.shortDescription}</strong></Card.Text>
              <Card.Text>{featuredProject.description}</Card.Text>
              <h5>Key Features:</h5>
              <ul>
                {featuredProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <h5>Technology Stack:</h5>
              <div>
                {featuredProject.techStack.map((tech, i) => (
                  <span key={i} className="badge bg-primary me-2 mb-2">{tech}</span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Skills;

