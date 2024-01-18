// server.js

const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 5001;

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
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

// Your other routes and middleware go here

app.listen(port, () => {
  // Call the function to test the database connection
  testDatabaseConnection();
  console.log(`Server is running on http://localhost:${port}`);
});
