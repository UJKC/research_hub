import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import ProjectForm from './NewProject';

const ProfilePagePlus = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModal1 = () => setShowModal1(true);
  const handleModal2 = () => setShowModal2(true);

  return (
    <Container>
      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="link" onClick={handleModal1}>
            <span style={{ fontSize: '24px', marginRight: '8px' }}>+</span>
          </Button>
          <Button variant="link" onClick={handleModal2}>
            <span style={{ fontSize: '24px' }}>+</span>
          </Button>
        </Col>
      </Row>
      <Modal show={showModal1} onHide={() => setShowModal1(false)}>
        <ProjectForm />
      </Modal>
      <Modal show={showModal2} onHide={() => setShowModal2(false)}>
        {/* Modal 2 content */}
      </Modal>
    </Container>
  );
};

export default ProfilePagePlus;
