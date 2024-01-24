import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    profilePhoto: '',
    username: '',
    email: '',
    password: '',
    bio: '',
    phoneNumber: '',
    address: '',
    designation: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Basic email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      setErrors({
        ...errors,
        email: isValidEmail ? '' : 'Invalid email address',
      });
    }
    // Basic password length validation
    if (name === 'password') {
      const isValidPassword = value.length >= 6;
      setErrors({
        ...errors,
        password: isValidPassword ? '' : 'Password must be at least 6 characters long',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/createuser', formData);
      console.log('Server response:', response.data);
      // Handle success or additional logic here
    } catch (error) {
      console.error('Error sending data to the server:', error);
      // Handle error or display an error message
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Photo</label>
          <input type="file" name="profilePhoto" onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Bio</label>
          <textarea name="bio" onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <textarea name="address" onChange={handleChange} />
        </div>
        <div>
          <label>Designation</label>
          <input type="text" name="designation" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
