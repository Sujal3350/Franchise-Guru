import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue exploring franchises</p>

        <form className="login-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button className="login-btn" type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>Don’t have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
