import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ setMessage }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate account creation
    setMessage('Your account has been created');
    navigate('/signin');
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-netflixGray p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-netflixBlack border-none text-netflixWhite focus:outline-none"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-netflixBlack border-none text-netflixWhite focus:outline-none"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-netflixBlack border-none text-netflixWhite focus:outline-none"
            required 
          />
        </div>
        <button type="submit" className="bg-netflixRed p-2 rounded text-netflixWhite w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
