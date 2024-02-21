import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TagForm = () => {
  const [tagData, setTagData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTagData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to localhost:5002/newtag
    fetch('http://localhost:5002/newtag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tagData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Tag created successfully');
        // Optionally, you can redirect or perform other actions upon successful submission
      } else {
        console.error('Failed to create tag');
      }
    })
    .catch(error => console.error('Error creating tag:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="tagName">
        <Form.Label>Name of the Tag</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={tagData.name}
          onChange={handleChange}
          placeholder="Enter tag name"
          required
        />
      </Form.Group>

      <Form.Group controlId="tagDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={tagData.description}
          onChange={handleChange}
          placeholder="Enter tag description"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TagForm;
