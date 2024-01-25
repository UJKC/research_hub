import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {

  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    profilePhoto: 'sample',
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
      const response1 = await fetch('http://localhost:5000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the first request was successful before proceeding with the second request
      if (response1.ok) {
        const file = formData.profilePhoto; // Assuming file is already defined

        // Second API request to port 5000/createUserPhoto
        const formData1 = new FormData();
        formData1.append('profilePhoto', file);
        formData1.append('username', formData.username);

        const response2 = await fetch('http://localhost:5000/createUserPhoto', {
          method: 'POST',
          body: formData1,
        });

        // Handle the response from the second request
        if (response2.ok) {
          console.log('Both requests were successful');
        } else {
          console.error('Error in the second request');
        }
      } else {
        console.error('Error in the first request');
      }
      // Handle success or additional logic here
      
    } catch (error) {
      console.error('Error sending data to the server:', error);
      // Handle error or display an error message
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Photo</label>
          <input type="file" name="profilePhoto" onChange={handleFileChange} />
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
