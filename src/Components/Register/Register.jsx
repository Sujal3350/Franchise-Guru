import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create an Account</h2>
        <p className="register-subtitle">Join us and start your franchise journey</p>

        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="register-btn" type="submit">Register</button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
