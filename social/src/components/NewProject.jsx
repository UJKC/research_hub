import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const ProjectForm = () => {

    const options = [
        { value: 'technology', label: 'Technology' },
        { value: 'science', label: 'Science' },
        { value: 'health', label: 'Health' },
        { value: 'education', label: 'Education' },
        { value: 'arts', label: 'Arts' },
        // Add more options as needed
    ];


    const [researchers, setResearchers] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagsChange = (selectedOptions) => {
        setSelectedTags(selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            researchers,
            projectTitle,
            description,
            tags: selectedTags.map(tag => tag.value),
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
            <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <Select
                    isMulti
                    options={options}
                    value={selectedTags}
                    onChange={handleTagsChange}
                    placeholder="Select tags"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ProjectForm;
