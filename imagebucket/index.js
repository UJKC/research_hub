const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
const port = 5003;

app.post('/register', async (req, res) => {

  try {
    console.log(req.body)
    const { profilePhotoBase64, username, email, password, bio, phoneNumber, address, designation } = req.body;

    // Decode the Base64 string
    const base64Image = profilePhotoBase64.split(',')[1]; // Remove data:image/... prefix
    const imageBuffer = Buffer.from(base64Image, 'base64');

    // Create the user's directory if it doesn't exist
    const uploadDir = 'uploads/users';
    const userDir = path.join(uploadDir, username);
    const profilePath = path.join(userDir, 'profile');
    const postPath = path.join(userDir, 'post');
    const repoPath = path.join(userDir, 'repository');
    fs.mkdirSync(profilePath, { recursive: true });
    fs.mkdirSync(postPath, { recursive: true });
    fs.mkdirSync(repoPath, { recursive: true });

    // Save the image file
    const filename = 'profile.jpg';
    const profileDir = path.join(profilePath, filename);
    fs.writeFileSync(profileDir, imageBuffer);

    const formData = {
      profilePhoto: profileDir,
      username: username,
      email: email,
      password: password,
      bio: bio,
      phoneNumber: phoneNumber,
      address: address,
      designation: designation
    }

    try {
      const response = await fetch('http://localhost:5001/createdbuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Set content type to JSON
      body: JSON.stringify(formData), // Stringify the object as JSON
    });
      const data = await response.json();
      // Handle server response (e.g., display success/error message)
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    res.json({ message: 'Registration successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed.' });
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
