import React, { useState } from 'react';

const RegisterForm = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoBase64, setProfilePhotoBase64] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

  const formData = {
    profilePhotoBase64: profilePhotoBase64,
    username: username,
    email: email,
    password: password,
    bio: bio,
    phoneNumber: phoneNumber,
    designation: designation
  }

    try {
      const response = await fetch('http://localhost:5003/register', {
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
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePhotoBase64(e.target.result);
    };
    reader.readAsDataURL(file);
    setProfilePhoto(file); // Still store the file for preview or other purposes
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="profilePhoto">Profile Photo (JPG):</label>
      <input
        type="file"
        id="profilePhoto"
        name="profilePhoto"
        accept=".jpg"
        required
        onChange={handleImageChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        name="bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <label htmlFor="designation">Designation:</label>
      <input
        type="text"
        id="designation"
        name="designation"
        value={designation}
        onChange={(event) => setDesignation(event.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
