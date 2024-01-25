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
    console.log(req.body)
    res.json(req.body)

  }
  catch(err) {
    res.json({message: err});
  }

});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
