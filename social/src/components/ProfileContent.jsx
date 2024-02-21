import React from 'react';
import ProjectMasterCard from './ProjectMasterCard';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import SamplePosts from './SamplePosts';
import ProfilePagePlus from './NewPrPo';

const Content = ({ profileData }) => {
  const defaultProfileData = {
    profile_photo: 'placeholder.jpg',
    username: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida felis nec ex dapibus, eget tempus sem finibus.',
    phone_number: '+1234567890',
    address: '123 Main St, City, Country',
    designation: 'Researcher'
  };

  const { profile_photo, username, email, bio, phone_number, address, designation } = profileData || defaultProfileData;

  return (
    <>
    <Container>
      <ProfilePagePlus />
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image src={profile_photo} roundedCircle className="mb-3" />
          <h2>{username}</h2>
          <p>{bio}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Personal Details</Card.Title>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone_number}</li>
                <li className="list-group-item">Address: {address}</li>
                <li className="list-group-item">Designation: {designation}</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <SamplePosts />
    </Container>
    <ProjectMasterCard />
    </>
  );
};

export default Content;
