import React from 'react';
import './Order.css';


function Order() {
  return (
    <>
      <div className="home-page">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the website.</p>


        {/* Order Form Section */}
        <div className="order-form">
          <h2>Order Your Custom Design</h2>
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="details">Design Details</label>
            <textarea id="details" name="details" rows="5" placeholder="Describe your design requirements" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      
    </>
  );
}

export default Order;
