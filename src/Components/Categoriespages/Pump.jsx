import React, { useState } from 'react';
import './Pump.css';
import nayara from '../../assets/nayara.jpg';
import iocl from '../../assets/iocl.jpg';
import reliance from '../../assets/reliance.jpg';
import shell from '../../assets/shell.png';
import hp from '../../assets/hp.jpg';
import jiobp from '../../assets/jiobp.png';

const franchiseData = [
  {
    id: 1,
    name: 'Nayara',
    logo: nayara,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1555,
    launched: 1932,
    investment: 'INR 3 Cr - 5 Cr',
    space: '800-1200 sq.ft',
    outlets: '6,000+ (India)',
    type: 'Petrol Pump Franchise',
    headquarters: 'Mumbai, Maharashtra, India',
    rating: 4.9,
    link: 'https://www.nayaraenergy.com/retail/petrol-pump-dealership-apply',
  },
  {
    id: 2,
    name: 'IOCL',
    logo: iocl,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1992,
    launched: 2000,
    investment: 'INR 2 Cr - 6 Cr',
    space: '1000 - 2000 sq.ft',
    outlets: '34,000 +',
    type: 'Retail Outlet (Petrol Pump)',
    headquarters: 'New Delhi, India',
    rating: 4.6,
    link: 'https://iocl.com/pages/ro-ksk-dealerships-overview',
  },
  {
    id: 3,
    name: 'Reliance',
    logo: reliance,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2006,
    launched: 2009,
    investment: 'INR 2 Cr - 6 Cr',
    space: '800 - 1500 sq.ft',
    outlets: '1400+',
    type: 'Retail Outlet',
    headquarters: 'Mumbai, Maharashtra, India',
    rating: 4.5,
    link: 'https://www.lendingkart.com/blog/reliance-petrol-pump-dealership/',
  },
  {
    id: 4,
    name: 'Shell',
    logo: shell,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1555,
    launched: 1932,
    investment: 'INR 3 Cr - 5 Cr',
    space: '800-1200 sq.ft',
    outlets: '6,000+ (India)',
    type: 'Petrol Pump Franchise',
    headquarters: 'Mumbai, Maharashtra, India',
    rating: 4.9,
    link: 'https://www.shell.in/business-customers/business-opportunity-shell-retailership.html#iframe=L2Zvcm1zL3NoZWxsX3JldGFpbGVyX3Byb2dyYW1faW5fZW4',
  },
  {
    id: 5,
    name: 'HP',
    logo: hp,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 1992,
    launched: 2000,
    investment: 'INR 2 Cr - 6 Cr',
    space: '1000 - 2000 sq.ft',
    outlets: '34,000 +',
    type: 'Retail Outlet (Petrol Pump)',
    headquarters: 'New Delhi, India',
    rating: 4.6,
    link: 'https://hindustanpetroleum.com/pages/petrol-pump-dealership-cocos',
  },
  {
    id: 6,
    name: 'Jio bp',
    logo: jiobp,
    category: 'Fuel Station',
    expansion: 'Delhi, Haryana, Himachal Pradesh, ... +22 more',
    established: 2006,
    launched: 2009,
    investment: 'INR 2 Cr - 6 Cr',
    space: '800 - 1500 sq.ft',
    outlets: '1400+',
    type: 'Retail Outlet',
    headquarters: 'Mumbai, Maharashtra, India',
    rating: 4.5,
    link: 'https://www.jiobp.com/partners',
  },
];

function Pump() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFranchises = franchiseData.filter((franchise) =>
    franchise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="po">
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search fuel franchises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search fuel franchises"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </div>

      {/* Franchise Cards */}
      <div className="container-pump">
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

export default Pump;