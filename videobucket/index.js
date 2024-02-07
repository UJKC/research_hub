const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
const port = 5004;

app.post('/register', async (req, res) => {

  try {
    console.log(req.body)
    const { username } = req.body;

    // Create the user's directory if it doesn't exist
    const uploadDir = 'uploads/users';
    const userDir = path.join(uploadDir, username);
    const postPath = path.join(userDir, 'post');
    const repoPath = path.join(userDir, 'repository');
    fs.mkdirSync(postPath, { recursive: true });
    fs.mkdirSync(repoPath, { recursive: true });

    res.json({ message: 'Registration video successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration video failed.' });
  }
});

app.post('/newpost', async (req, res) => {
  
  function saveVideo(base64String, username, addToRepository) {
    const date = new Date()
    const folderPath = `./uploads/users/${username}/post/${date.getTime()}/`
    const folderPathRep = `./uploads/users/${username}/repository/${date.getTime()}/`
  
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, {recursive: true})
    }
  
    if (!fs.existsSync(folderPathRep)) {
      fs.mkdirSync(folderPathRep, {recursive: true})
    }
    
    const fileName = `video_${Date.now()}.mp4`
    console.log("HERE!")
    
    const filePath = path.join(folderPath, fileName)
    const buffer = Buffer.from(base64String, 'base64')
    fs.writeFileSync(filePath, buffer)
  
    if (addToRepository) {
      const Repdone = path.join(folderPathRep, fileName)
      fs.writeFileSync(Repdone, buffer)
    }
  
    console.log(filePath)
    return filePath
  }

    console.log(req.body)
    const { videos, addToRepository } = req.body;
    let username = 'example2'

    if (!username || !videos || !Array.isArray(videos)) {
      return res.status(400).json({savedImagesPaths: "No videos sent"})
    }

    const savedVideoPaths = []

    videos.forEach(base64Video => {
      console.log("HERE")
      const savedVideoPath = saveVideo(base64String, username, addToRepository);
      console.log(savedVideoPaths)
      savedImagesPaths.push(savedVideoPathPath)
    })

    return res.status(200).json({
      message: "Video saved successfully",
      savedVideoPaths
    })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
