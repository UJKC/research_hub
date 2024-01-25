// server.js

const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const User = require('./models/userschema');

const app = express();
const port = 5001;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Replace 'your_database.sqlite' with the actual path to your SQLite database file
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sql/database.db',
});

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    /*
    const [results] = await sequelize.query("SELECT name FROM sqlite_master WHERE type='table';");
    
    for (const result of results) {
      const tableName = result.name;

      // Fetch the columns of each table
      const [columns] = await sequelize.query(`PRAGMA table_info(${tableName});`);

      console.log(`Table: ${tableName}`);
      console.log('Columns:', columns.map((column) => column.name));
      console.log('---');
    }
    */

  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

app.post('/authenticate', async (req, res) => {
  try {
    // Extract email and password from the request
    const { email, password } = req.body;

    // Find the user in the database based on email and password
    const [user] = await sequelize.query(
      'SELECT * FROM Users WHERE Users.email = :email AND Users.password = :password',
      {
        replacements: { email, password },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    // If the user is not found, authentication fails
    if (!user) {
      res.status(401).json({ authenticated: false, error: 'Authentication failed' });
    } else {
      res.status(200).json({ authenticated: true, user: user });
    }
  } catch (error) {
    console.error('Error during authentication:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/createdbuser', async (req, res) => {
  try {
    const { profilePhoto, username, email, password, bio, phoneNumber, address, designation } = req.body;

    const currentYear = new Date().getDate();

    // Handle the user registration data as needed
    console.log('Received user data:', { profilePhoto, username, email, password, bio, phoneNumber, address, designation });

    // Insert user data into the Users table using Sequelize
    sequelize.query('INSERT INTO users (profile_photo, username, email, password, bio, phone_number, address, RegistrationDate, designation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', {
      replacements: [profilePhoto, username, email, password, bio, phoneNumber, address, currentYear, designation],
      type: Sequelize.QueryTypes.INSERT,
    });
    

    console.log(`User ${User.Username} created with ID ${User.UserID}`);

    res.status(201).json({ message: 'User data received successfully' });
  } catch (error) {
    console.error('Error handling user data on backend_5001:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/newpostdbms', async (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  // Call the function to test the database connection
  testDatabaseConnection();
  sequelize.sync().then(() => {
    console.log('Database initialized.');
  });
  console.log(`Server is running on http://localhost:${port}`);
});
