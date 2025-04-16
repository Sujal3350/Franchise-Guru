import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import { motion, AnimatePresence } from 'framer-motion';

import food from '../../assets/food.jpg';
import pump from '../../assets/pump.jpg';
import shoes from '../../assets/shoes.jpg';
import education from '../../assets/education.jpeg';
import health from '../../assets/health.jpeg';
import fitness from '../../assets/fitness.png';
import fashion from '../../assets/fashion.jpeg';
import automobile from '../../assets/automobile.jpeg';

export const franchiseData = [
  {
    id: 1,
    title: 'Food & Beverage',
    img: food,
    link: '/food',
    subtitle: 'Restaurants, Cafes & More',
    highlight: 'Top Picks',
  },
  {
    id: 2,
    title: 'Petrol Pump',
    img: pump,
    link: '/pump',
    subtitle: 'Fuel Stations',
    highlight: 'High ROI',
  },
  {
    id: 3,
    title: 'Retail',
    img: shoes,
    link: '/retail',
    subtitle: 'Fashion & Lifestyle',
    highlight: 'Trending',
  },
  {
    id: 4,
    title: 'Education',
    img: education,
    link: '/education',
    subtitle: 'Schools & Coaching',
    highlight: 'Popular',
  },
  {
    id: 5,
    title: 'Health & Wellness',
    img: health,
    link: '/health',
    subtitle: 'Clinics & Spas',
    highlight: 'Growing',
  },
  {
    id: 6,
    title: 'Fitness',
    img: fitness,
    link: '/fitness',
    subtitle: 'Gyms & Studios',
    highlight: 'Top Picks',
  },
  {
    id: 7,
    title: 'Fashion',
    img: fashion,
    link: '/fashion',
    subtitle: 'Apparel & Accessories',
    highlight: 'Trending',
  },
  {
    id: 8,
    title: 'Automobile',
    img: automobile,
    link: '/automobile',
    subtitle: 'Service & Dealerships',
    highlight: 'High ROI',
  },
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = franchiseData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="categories-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Hero Banner */}
      <motion.div
        className="hero-banner"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Discover Your Franchise Journey</h1>
        <p>Explore trusted opportunities with Franchise Guru</p>
        <Link to="/contact">
          <motion.button
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="search-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search categories (e.g., Food, Retail)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search franchise categories"
          />
          <motion.button
            type="submit"
            className="search-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🔍
          </motion.button>
        </form>
      </motion.div>

      {/* Category Grid */}
      <AnimatePresence>
        <motion.div
          className="category-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((item) => (
              <motion.div
                key={item.id}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Link to={item.link} aria-label={`Explore ${item.title} franchises`}>
                  <div className="card-image">
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <div className="card-overlay">
                      <span className="highlight-badge">{item.highlight}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No categories found. Try another search term.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Sticky CTA */}
      <motion.div
        className="sticky-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        
        <p>Ready to find your perfect franchise?</p>
        <Link to="/categories">
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Categories;