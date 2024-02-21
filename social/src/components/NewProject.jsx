import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProjectForm = () => {
    const [projectName, setProjectName] = useState('');
    const [researchers, setResearchers] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);

    const handleTagsChange = (selectedTags) => {
        setTags(selectedTags);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            projectName,
            researchers,
            projectTitle,
            description,
            tags
        };
    
        fetch('http://localhost:5002/newproject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle success response
            console.log('Form data sent successfully');
        })
        .catch(error => {
            // Handle error
            console.error('There was a problem sending the form data:', error);
        });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="projectName">
                <Form.Label>Name of the Project</Form.Label>
                <Form.Control type="text" placeholder="Enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="researchers">
                <Form.Label>Name of the researchers or their ID</Form.Label>
                <Form.Control type="text" placeholder="Enter researchers" value={researchers} onChange={(e) => setResearchers(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="projectTitle">
                <Form.Label>Title of the project</Form.Label>
                <Form.Control type="text" placeholder="Enter project title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            {/* You can implement the tags selection component here */}
            {/* Example: <TagsInput onChange={handleTagsChange} /> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ProjectForm;
