import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { franchiseData } from '../Categories/Categories'; // Import franchiseData

// Placeholder images (replace with actual assets)
 // Add a hero background image
import food from '../../assets/food.jpg';
import shoes from '../../assets/shoes.jpg';
import education from '../../assets/education.jpeg';
import parth from '../../assets/parth.png';

const Home = () => {
  const featuredFranchises = franchiseData.slice(0, 3); // Use the first 3 items from franchiseData

  const testimonials = [
    {
      name: 'Priya Mehra',
      role: 'Franchise Owner',
      quote: 'Franchise Guru made my dream of owning a business a reality with their expert support!',
    },
    {
      name: 'Vikram Singh',
      role: 'Investor',
      quote: 'The platform’s verified franchises gave me confidence to invest. Highly recommended!',
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Launch Your Franchise Journey</h1>
          <p>Discover Profitable Opportunities Across India with Franchise Guru</p>
          <Link to="/categories">
            <motion.button
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Apply Now
              <svg
                className="cta-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Choose Franchise Guru?
        </motion.h2>
        <div className="about-content">
          {[
            {
              title: 'Diverse Franchise Options',
              description:
                'Explore a wide range of categories like Food, Retail, and Services tailored to your goals.',
              icon: '🌐',
            },
            {
              title: 'Trusted Business Models',
              description:
                'Invest with confidence in franchises backed by proven models and strong brand support.',
              icon: '✅',
            },
            {
              title: 'Quick Start Support',
              description:
                'Launch fast with expert guidance, training, and ongoing support from day one.',
              icon: '🚀',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <span className="card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Franchises Slider */}
      <section className="featured-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Featured Franchises
        </motion.h2>
        <Slider {...sliderSettings}>
          {featuredFranchises.map((franchise) => (
            <motion.div
              key={franchise.id}
              className="franchise-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={franchise.link}>
                <img src={franchise.img} alt={franchise.title} loading="lazy" />
                <div className="franchise-overlay">
                  <h3>{franchise.title}</h3>
                  <p>{franchise.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={parth}
                alt={`${testimonial.name}'s avatar`}
                className="testimonial-icon"
              />
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="role">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Stay Updated</h2>
          <p>Get the latest franchise opportunities delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              required
            />
            <motion.button
              type="submit"
              className="newsletter-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;