// File: models/user.js

const { Sequelize, DataTypes } = require('sequelize');

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../sql/database.db',
});

// Define the User model to match your existing schema
const User = sequelize.define('Users', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  PasswordHash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  RegistrationDate: {
    type: DataTypes.DATE,
  },
  IsAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'Users', // Specify the exact table name
  timestamps: false,   // Disable createdAt and updatedAt columns
});

module.exports = User;
