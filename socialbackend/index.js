// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5002;

// Enable CORS
app.use(cors());
app.use(express.json());

// Your API routes go here

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/newpost', async (req, res) => {
  try {
    // Extract email and password from the request
    const dataToSend = req.body;

    // Make a POST request to image_dbms
    const response_img = await axios.post('http://localhost:5003/newpost', dataToSend);
    const {savedImagesPaths} = response_img.data
    console.log(savedImagesPaths);

    // Make a POST request to video_dbms
    const response_vid = await axios.post('http://localhost:5004/newpost', dataToSend);
    const {savedVideoPaths} = response_vid.data
    console.log(savedVideoPaths);

    // Make a POST request to document_dbms
    const response_doc = await axios.post('http://localhost:5005/newpost', dataToSend);
    const {savedDocumentPaths} = response_doc.data
    console.log(savedDocumentPaths);

    // Make a POST request to another endpoint
    const response = await axios.post('http://localhost:5001/newpostdbms', dataToSend);

    // Log the response from the other endpoint
    console.log(response.data);

    // Send the original data as a response
    res.json(req.body);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.json({ message: err.message });
  }
});

app.post('/newproject', (req, res) => {
  const projectData = req.body;
  // Here you can handle the received project data as per your requirement
  console.log('Received project data:', projectData);
  // Assuming you want to send a success response
  res.status(200).json({ message: 'Project data received successfully' });
});

app.post('/newtag', (req, res) => {
  const { name, description } = req.body;

  // Assuming you have a database connection, you can save the tag data here
  // Example:
  // db.collection('tags').insertOne({ name, description }, (err, result) => {
  //   if (err) {
  //     console.error('Error saving tag:', err);
  //     res.status(500).send('Error saving tag');
  //   } else {
  //     res.status(201).send('Tag created successfully');
  //   }
  // });

  // For this example, we'll just log the received data
  console.log('Received tag data:', { name, description });
  res.status(201).send('Tag created successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
