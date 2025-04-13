import React, { useState } from 'react';
import dominos from '../../assets/dominos.png';
import haldiram from '../../assets/haldiram.png';
import subway from '../../assets/subway.png';
import burgerking from '../../assets/burgerking.jpg';
import lapinoz from '../../assets/lapinoz.jpg';
import martinoz from '../../assets/martinoz.jpg';
import './Food.css';

const franchiseData = [
  {
    id: 1,
    name: "Domino's",
    logo: dominos,
    category: 'Pizza',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1960,
    launched: 1967,
    investment: 'INR 30 Lakh - 50 Lakh',
    space: '1500-2000 sq.ft',
    outlets: '20,591 Restaurants',
    type: 'Fixed stores and Nonfixed stores',
    headquarters: 'Noida, Uttar Pradesh, India',
    rating: 4.9,
    link: 'https://biz.dominos.com/about-us/franchising/',
  },
  {
    id: 2,
    name: "Haldiram's",
    logo: haldiram,
    category: 'Indian Sweets',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1937,
    launched: 1970,
    investment: 'INR 30 Lakh Up to 5 Cr',
    space: '150 - 5000 sq.ft',
    outlets: '150 +',
    type: 'Ready to eat Food product',
    headquarters: 'Noida',
    rating: 4.4,
    link: 'https://www.haldiram.com/dealership',
  },
  {
    id: 3,
    name: 'SUBWAY',
    logo: subway,
    category: 'Sandwiches',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2013,
    launched: 2014,
    investment: 'INR 24 Lakh - 30 Lakh',
    space: '170-350 sq.ft',
    outlets: '37,000',
    type: 'Fixed stores and Nonfixed stores',
    headquarters: 'Gurgaon, Delhi',
    rating: 4.5,
    link: 'https://www.subwayfranchise.com/en-us/contact-us',
  },
  {
    id: 4,
    name: "La Pino'z",
    logo: lapinoz,
    category: 'Pizza',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1960,
    launched: 1967,
    investment: 'INR 30 Lakh - 50 Lakh',
    space: '1500-2000 sq.ft',
    outlets: '20,591 Restaurants',
    type: 'Fixed stores and Nonfixed stores',
    headquarters: 'Noida, Uttar Pradesh, India',
    rating: 4.9,
    link: 'https://lapinozpizza.in/franchise-enquiry',
  },
  {
    id: 5,
    name: "Martino'z",
    logo: martinoz,
    category: 'Pizza',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1937,
    launched: 1970,
    investment: 'INR 30 Lakh Up to 5 Cr',
    space: '150 - 5000 sq.ft',
    outlets: '150 +',
    type: 'Ready to eat Food product',
    headquarters: 'Noida',
    rating: 4.4,
    link: 'https://martinozpizza.com/franchise-enquiry',
  },
  {
    id: 6,
    name: 'Burger King',
    logo: burgerking,
    category: 'Burgers',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2013,
    launched: 2014,
    investment: 'INR 24 Lakh - 30 Lakh',
    space: '170-350 sq.ft',
    outlets: '37,000',
    type: 'Fixed stores and Nonfixed stores',
    headquarters: 'Gurgaon, Delhi',
    rating: 4.5,
    link: 'https://franchising.bk.com/franchise-process',
  },
];

const Food = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFranchises = franchiseData.filter((franchise) =>
    franchise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fo">

    <div className="food">
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search food franchises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search food franchises"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </div>

      {/* Franchise Cards */}
      <div className="container-food">
        {filteredFranchises.length > 0 ? (
          filteredFranchises.map((franchise) => (
            <div key={franchise.id} className="franchise-card">
              <div className="franchise-header">
                <h2 className="franchise-name">{franchise.name}</h2>
                <span className="verified">✔ Verified</span>
              </div>
              <div className="franchise-content">
                <div className="franchise-photo" data-category={franchise.category}>
                  <img src={franchise.logo} alt={franchise.name} />
                </div>
                <div className="franchise-details">
                  <p>
                    <strong>Expansion:</strong> {franchise.expansion}
                  </p>
                  <p>
                    <strong>Established:</strong> {franchise.established}
                  </p>
                  <p>
                    <strong>Launched:</strong> {franchise.launched}
                  </p>
                  <div className="info-btn">
                    <a
                      href={franchise.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply for Dealership
                    </a>
                  </div>
                </div>
              </div>
              <div className="investment-info">
                <p>
                  <strong>Investment:</strong> {franchise.investment}
                </p>
                <p>
                  <strong>Space:</strong> {franchise.space}
                </p>
                <p>
                  <strong>Outlets:</strong> {franchise.outlets}
                </p>
                <p>
                  <strong>Type:</strong> {franchise.type}
                </p>
                <p>
                  <strong>Headquarters:</strong> {franchise.headquarters}
                </p>
              </div>
              <div className="franchise-footer">
                <div className="rating">⭐ {franchise.rating}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No franchises found. Try a different search.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Food;