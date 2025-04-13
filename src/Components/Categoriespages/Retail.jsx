import React, { useState } from 'react';
import bata from '../../assets/bata.png';
import woodland from '../../assets/woodland.png';
import puma from '../../assets/puma.png';
import nike from '../../assets/nike.jpg';
import adidas from '../../assets/adidas.png';
import reebok from '../../assets/reebok.png';
import './Retail.css';

const franchiseData = [
  {
    id: 1,
    name: 'Bata',
    logo: bata,
    category: 'Footwear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1894,
    launched: 1932,
    investment: 'INR 30 Lakh - 1 Cr',
    space: '500-1500 sq.ft',
    outlets: '1500 Retail stores',
    type: 'Retail Franchise',
    headquarters: 'Gurugram, Haryana, India',
    rating: 4.9,
    link: 'https://www.bata.in/franchise', // Placeholder; update with actual link
  },
  {
    id: 2,
    name: 'Woodland',
    logo: woodland,
    category: 'Footwear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1992,
    launched: 2000,
    investment: 'INR 50 Lakh Up to 1 Cr',
    space: '1000 - 2000 sq.ft',
    outlets: '5000 multi-retail outlets',
    type: 'Retail Franchise',
    headquarters: 'New Delhi, India',
    rating: 4.6,
    link: 'https://www.woodlandworldwide.com/franchise', // Placeholder; update with actual link
  },
  {
    id: 3,
    name: 'Puma',
    logo: puma,
    category: 'Sportswear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2006,
    launched: 2009,
    investment: 'INR 50 Lakh - 2 Cr',
    space: '800 - 1500 sq.ft',
    outlets: '370',
    type: 'Retail Franchise',
    headquarters: 'Bengaluru, Karnataka, India',
    rating: 4.5,
    link: 'https://in.puma.com/franchise', // Placeholder; update with actual link
  },
  {
    id: 4,
    name: 'Nike',
    logo: nike,
    category: 'Sportswear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1894,
    launched: 1932,
    investment: 'INR 30 Lakh - 1 Cr',
    space: '500-1500 sq.ft',
    outlets: '1500 Retail stores',
    type: 'Retail Franchise',
    headquarters: 'Gurugram, Haryana, India',
    rating: 4.9,
    link: 'https://www.nike.com/franchise', // Placeholder; update with actual link
  },
  {
    id: 5,
    name: 'Adidas',
    logo: adidas,
    category: 'Sportswear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1992,
    launched: 2000,
    investment: 'INR 50 Lakh Up to 1 Cr',
    space: '1000 - 2000 sq.ft',
    outlets: '5000 multi-retail outlets',
    type: 'Retail Franchise',
    headquarters: 'New Delhi, India',
    rating: 4.6,
    link: 'https://www.adidas.co.in/franchise', // Placeholder; update with actual link
  },
  {
    id: 6,
    name: 'Reebok',
    logo: reebok,
    category: 'Sportswear',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2006,
    launched: 2009,
    investment: 'INR 50 Lakh - 2 Cr',
    space: '800 - 1500 sq.ft',
    outlets: '370',
    type: 'Retail Franchise',
    headquarters: 'Bengaluru, Karnataka, India',
    rating: 4.5,
    link: 'https://www.reebok.in/franchise', // Placeholder; update with actual link
  },
];

function Retail() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFranchises = franchiseData.filter((franchise) =>
    franchise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ro">
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search retail franchises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search retail franchises"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </div>

      {/* Franchise Cards */}
      <div className="container-retail">
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
                    <a href={franchise.link} target="_blank" rel="noopener noreferrer">
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
  );
}

export default Retail;