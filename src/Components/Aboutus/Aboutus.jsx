import React from 'react';
import './Aboutus.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import about from '../../assets/about.jpg'; // Placeholder image
import parth from '../../assets/parth.png'; // Placeholder image

function Aboutus() {
  const stats = [
    { value: '500+', label: 'Franchises Listed' },
    { value: '10K+', label: 'Happy Entrepreneurs' },
    { value: '50+', label: 'Cities Covered' },
  ];

  const testimonials = [
    {
      name: 'Dev Vaghela',
      role: 'Franchise Owner',
      quote: 'Franchise Guru made finding the perfect business opportunity so easy! Their support team is amazing.',
    },
    {
      name: 'Rahul Verma',
      role: 'Investor',
      quote: 'The platform’s verified listings gave me confidence to invest. Highly recommend!',
    },
  ];

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        {/* Hero Section */}
        <motion.h1
          className="about-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Franchise Guru
        </motion.h1>
        <motion.p
          className="about-intro"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to <strong>Franchise Guru</strong> — your trusted platform to discover verified franchise
          opportunities across India. Whether you're a budding entrepreneur or a seasoned investor, we’re here
          to guide you every step of the way.
        </motion.p>

        {/* Mission Section */}
        <motion.div
          className="about-section mission-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Mission</h2>
          <p>
            To empower individuals by simplifying the process of discovering and applying for franchise
            businesses. We aim to build a transparent, accessible, and growth-focused franchise ecosystem.
          </p>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          className="about-section offer-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>What We Offer</h2>
          <div className="offer-grid">
            {[
              'Verified franchise listings',
              'In-depth business insights',
              'Streamlined application process',
              'Sector-specific browsing',
              '24/7 customer support',
            ].map((item, index) => (
              <motion.div
                key={index}
                className="offer-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="checkmark">✔</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Can Use Section */}
        <motion.div
          className="about-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Who Can Use Our Platform?</h2>
          <p>
            Aspiring entrepreneurs, investors, small business owners, or anyone looking to start or expand a
            business through franchising.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="about-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>Why Choose Franchise Guru?</h2>
          <ul>
            {[
              'Curated list of top-performing franchises',
              'Regular updates with new opportunities',
              'User-friendly and responsive design',
              'Expert guidance for applications',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                ✅ {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="team-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={about} alt="Team working together" className="team-image" />
              <p>
                Our dedicated team of experts is passionate about helping you succeed in your franchise
                journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="testimonial-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2>What Our Users Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={parth} alt={`${testimonial.name}'s profile`} className="testimonial-icon" />
                <p className="quote">"{testimonial.quote}"</p>
                <p className="name">{testimonial.name}</p>
                <p className="role">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Policy and Terms Section */}
        <motion.div
          className="about-section policy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2>Our Policies</h2>
          <div className="policy-grid">
            <motion.div
              className="policy-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Privacy Policy</h3>
              <p>
                At Franchise Guru, we prioritize your privacy. Our Privacy Policy outlines how we collect, use,
                and protect your personal information to ensure a secure experience.
              </p>
              <Link to="/privacy-policy" className="policy-link">
                Read Full Privacy Policy
              </Link>
            </motion.div>
            <motion.div
              className="policy-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Terms and Conditions</h3>
              <p>
                Our Terms and Conditions govern your use of the Franchise Guru platform, ensuring a fair and
                transparent relationship with our users.
              </p>
              <Link to="/terms-and-conditions" className="policy-link">
                Read Full Terms and Conditions
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="about-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3>Ready to Begin Your Franchise Journey?</h3>
          <Link to="/categories">
            <motion.button
              className="explore-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Explore Opportunities
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Aboutus;