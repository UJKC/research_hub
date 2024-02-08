const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const moment = require('moment')

const app = express();
app.use(cors());
app.use(express.json())
const port = 5005;

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
  
    
  function savedDocumentToFile(base64Document, fileName) {
    const folderPath = path.join(uploadPath, fileName)
    const buffer = Buffer.from(base64Document, 'base64')
    fs.writeFileSync(folderPath, buffer)
    console.log(`Document ${fileName} saved successfully`)
  }
  

    console.log(req.body)
    const { documents, addToRepository } = req.body;
    let username = 'example2'

    const currentDate = moment().format("YYYY-MM-DD_HH-mm-ss")
    const uploadPath = path.join(__dirname, 'uploads', 'users', username, 'post', currentDate)

    fs.mkdirSync(uploadPath, { recursive: true})

    documents.forEach((document, index) => {
        const fileName = `document_${index+1}.pdf`
        savedDocumentToFile(document, fileName)
    });

    return res.status(200).json({
      message: "All Documents saved successfully",
    })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
