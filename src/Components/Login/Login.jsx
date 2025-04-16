import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', data.token);
        // Optionally redirect to dashboard or home
        // window.location.href = '/dashboard';
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue exploring franchises</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email address" required value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
          <button className="login-btn" type="submit">Login</button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <div className="login-footer">
          <p>Don’t have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
