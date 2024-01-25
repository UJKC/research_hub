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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
