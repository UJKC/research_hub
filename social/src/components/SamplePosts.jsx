import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const PostCard = ({ post }) => {
  const { researchers, title, projectName, postDate, tags } = post;

  const [showResearchersModal, setShowResearchersModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);

  const handleViewResearchers = () => setShowResearchersModal(true);
  const handleViewTags = () => setShowTagsModal(true);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Project: {projectName}</Card.Text>
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
        <Card.Text>Post Date: {postDate}</Card.Text>
        <Card.Text>
          Tags:
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
          <Modal.Title>Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>{tags.join(', ')}</Modal.Body>
      </Modal>
    </Card>
  );
};

const SamplePosts = () => {
  const posts = [
    {
      researchers: ['Researcher 1', 'Researcher 2', 'Researcher 3', 'Researcher 4'],
      title: 'Post 1',
      projectName: 'Project A',
      postDate: '2024-02-21',
      tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
    },
    {
      researchers: ['Researcher A', 'Researcher B'],
      title: 'Post 2',
      projectName: 'Project B',
      postDate: '2024-02-20',
      tags: ['Tag A', 'Tag B', 'Tag C']
    },
    // Add more sample posts as needed
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default SamplePosts;
