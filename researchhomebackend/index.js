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

app.post('/createUser', async (req, res) => {
  const userData = req.body;
  console.log(userData);

  try {
    // Forward the data to the server running on port 5001
    const response5001 = await axios.post('http://localhost:5001/createdbuser', userData);
    console.log('Server 5001 response:', response5001.data);

    // If successful response from 5001, send req.body to port 5003/register
    const response5003 = await axios.post('http://localhost:5003/register', userData);
    console.log('Server 5003 response:', response5003.data);

    const response50031 = await axios.post('http://localhost:5003/registerprofile', userData);
    console.log('Server 5003 response:', response50031.data);

    res.status(200).json({ message: 'Working' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/createUserPhoto', async (req, res) => {
  const userData = req.body;
  console.log(userData);

  try {

    // If successful response from 5001, send req.body to port 5003/register
    const response5003 = await axios.post('http://localhost:5003/registerprofile', userData);
    console.log('Server 5003 response:', response5003.data);

    res.json({ message: 'User created successfully, data forwarded, and registered' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
