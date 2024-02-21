import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  const { title, lastUpdate, researchers, description, tags } = project;

  const [showResearchersModal, setShowResearchersModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);

  const handleViewResearchers = () => setShowResearchersModal(true);
  const handleViewTags = () => setShowTagsModal(true);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Last Update: {lastUpdate}</Card.Text>
        <Card.Text>
          Researchers:
          {researchers.length > 3 ? (
            <Button variant="link" onClick={handleViewResearchers}>
              View more
            </Button>
          ) : (
            researchers.join(', ')
          )}
        </Card.Text>
        <Card.Text>
          Description: {description.length > 45 ? description.substring(0, 45) + '...' : description}
        </Card.Text>
        <Card.Text>
          Project Tags:
          {tags.length > 3 ? (
            <Button variant="link" onClick={handleViewTags}>
              View more
            </Button>
          ) : (
            tags.join(', ')
          )}
        </Card.Text>
      </Card.Body>

      <Modal show={showResearchersModal} onHide={() => setShowResearchersModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Researchers</Modal.Title>
        </Modal.Header>
        <Modal.Body>{researchers.join(', ')}</Modal.Body>
      </Modal>

      <Modal show={showTagsModal} onHide={() => setShowTagsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>{tags.join(', ')}</Modal.Body>
      </Modal>
    </Card>
  );
};

const ProjectMasterCard = () => {

    const projects = [
        {
          title: 'Project 1',
          lastUpdate: '2024-02-21',
          researchers: ['Researcher 1', 'Researcher 2', 'Researcher 3', 'Researcher 4'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']
        },
        {
          title: 'Project 2',
          lastUpdate: '2024-02-20',
          researchers: ['Researcher A', 'Researcher B', 'Researcher C'],
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          tags: ['Tag A', 'Tag B']
        },
        // Add more sample projects as needed
      ];
      
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <input
            type="text"
            className="form-control"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectMasterCard;
