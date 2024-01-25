// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const app = express();
const PORT = 5003;

// Enable CORS
app.use(cors());
app.use(express.json());

// Your API routes go here

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const createNestedDirectories = (baseDir, ...nestedDirs) => {
    nestedDirs.reduce((currentPath, nestedDir) => {
      const newPath = path.join(currentPath, nestedDir);
      if (!fs.existsSync(newPath)) {
        fs.mkdirSync(newPath);
      }
      return newPath;
    }, baseDir);
};

app.post('/register', (req, res) => {
    const { username } = req.body;
  
    // Create user folder
    const userFolderPath = path.join(__dirname, 'users', username);
    fs.mkdirSync(userFolderPath);
  
    // Create profile, post, and repository folders
    createNestedDirectories(userFolderPath, 'profile');
    createNestedDirectories(userFolderPath, 'post');
    createNestedDirectories(userFolderPath, 'repository');
  
    res.send('User registered successfully!');
});
  
  // Endpoint for creating a new post
app.post('/createPost', (req, res) => {
    const { username, postID, content, date } = req.body;
  
    const userPostPath = path.join(__dirname, 'users', username, 'post', date, postID);
    createNestedDirectories(userPostPath);
  
    // Save post content or perform other necessary actions
  
    res.send('Post created successfully!');
});
  
  // Endpoint for uploading an image to the repository
app.post('/uploadImage', (req, res) => {
    const { username, image, date } = req.body;
  
    const userRepoPath = path.join(__dirname, 'users', username, 'repository', date);
    createNestedDirectories(userRepoPath);
  
    // Save the uploaded image or perform other necessary actions
  
    res.send('Image uploaded successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
