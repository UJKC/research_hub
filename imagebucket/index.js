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
    const { profilePhotoBase64, username, email} = req.body;

    // Decode the Base64 string
    const base64Image = profilePhotoBase64.split(',')[1]; // Remove data:image/... prefix
    const imageBuffer = Buffer.from(base64Image, 'base64');

    // Create the user's directory if it doesn't exist
    const uploadDir = 'uploads/users';
    const userDir = path.join(uploadDir, username);
    fs.mkdirSync(userDir, { recursive: true });

    // Save the image file
    const filename = 'profile.jpg';
    const filePath = path.join(userDir, filename);
    fs.writeFileSync(filePath, imageBuffer);

    // ... (Rest of your registration logic)

    res.json({ message: 'Registration successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
