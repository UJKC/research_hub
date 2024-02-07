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

  function decodeBase64Image(base64String) {
    const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    const response = {};
    if (matches.length !==3) {
      return new Error('Invalid input string')
    }
  
    response.type = matches[1]
    response.data = Buffer.from(matches[2], 'base64')
  
    return response
  }
  
  function saveImage(base64String, username, addToRepository) {
    const decodeImage = decodeBase64Image(base64String)
    const date = new Date()
    const folderPath = `./uploads/users/${username}/post/${date.getTime()}/`
    const folderPathRep = `./uploads/users/${username}/repository/${date.getTime()}/`
  
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, {recursive: true})
    }
  
    if (!fs.existsSync(folderPathRep)) {
      fs.mkdirSync(folderPathRep, {recursive: true})
    }
    
    const fileName = `image_${Date.now()}.png`
    console.log("HERE!")
    
    const filePath = path.join(folderPath, fileName)
    fs.writeFileSync(filePath, decodeImage.data)
  
    if (addToRepository) {
      const Repdone = path.join(folderPathRep, fileName)
      fs.writeFileSync(Repdone, decodeImage.data)
    }
  
    console.log(filePath)
    return filePath
  }

    console.log(req.body)
    const { images, addToRepository } = req.body;
    let username = 'example2'

    if (!username || !images || !Array.isArray(images)) {
      return res.status(400).json({savedImagesPaths: "No images sent"})
    }

    const savedImagesPaths = []

    images.forEach(base64String => {
      console.log("HERE")
      const savedImagePath = saveImage(base64String, username, addToRepository);
      console.log(savedImagePath)
      savedImagesPaths.push(savedImagePath)
    })

    return res.status(200).json({
      message: "Image saved successfully",
      savedImagesPaths
    })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
