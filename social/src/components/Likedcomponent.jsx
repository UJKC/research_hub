import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Liked = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" className="col-md-2 col-sm-3">
        Like
      </Button>
      <Button variant="secondary" className="col-md-2 col-sm-3">
        Comment
      </Button>
      <Button variant="info" className="col-md-6 col-sm-3" onClick={handleShowModal}>
        Tag
      </Button>
      <Button variant="success" className="col-md-2 col-sm-3">
        Bookmark
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Project: (project)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add content for your modal here */}
          This is the content of the Tag modal.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Liked;
