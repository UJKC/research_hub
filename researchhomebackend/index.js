// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Your API routes go here

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/validate', async (req, res) => {
  try {
    // Extract email and password from the request
    console.log(req.body)
    const { email, password } = req.body;

    // Forward the authentication request to the backend running on port 5001
    const responseFromBackend5001 = await axios.post('http://localhost:5001/authenticate', {
      email,
      password,
    });

    // Send the same response back to the frontend
    res.status(responseFromBackend5001.status).json(responseFromBackend5001.data);
  } catch (error) {
    console.error('Error during validation:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
