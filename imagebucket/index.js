// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = 5003;
const path = require('path');

// Enable CORS
app.use(cors());
app.use(express.json());

// Your API routes go here

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const createNestedDirectories = (baseFolder, folderName) => {
  const folderPath = path.join(baseFolder, folderName);
  fs.mkdirSync(folderPath);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { username } = req.body;
    const userFolderPath = path.join(__dirname, 'users', username, 'profile');

    cb(null, userFolderPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // You can customize the file name if needed
  },
});

const upload = multer({ storage });

app.post('/register', upload.single('profilePhoto'), (req, res) => {
  const { username } = req.body;

  // Create base directory if it doesn't exist
  const baseFolderPath = path.join(__dirname, 'users');
  if (!fs.existsSync(baseFolderPath)) {
    fs.mkdirSync(baseFolderPath);
  }

  // Create user folder
  const userFolderPath = path.join(baseFolderPath, username);
  fs.mkdirSync(userFolderPath);

  // Create profile, post, and repository folders
  createNestedDirectories(userFolderPath, 'profile');
  createNestedDirectories(userFolderPath, 'post');
  createNestedDirectories(userFolderPath, 'repository');

  res.send('User registered successfully!');
});

app.post('/registerprofile', upload.single('profilePhoto'), (req, res) => {
  const { username } = req.body;
  res.send(`File uploaded for user ${username}`);
});
  
/*
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
*/

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
