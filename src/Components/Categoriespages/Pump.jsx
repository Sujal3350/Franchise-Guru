import React from 'react';
import './Pump.css';
import nayara from '../../assets/nayara.jpg';
import iocl from '../../assets/iocl.jpg';
import reliance from '../../assets/reliance.jpg';
import shell from '../../assets/shell.png';
import hp from '../../assets/hp.jpg';
import jiobp from '../../assets/jiobp.png';

function Pump() {
  return (
    <>
      <div className="po">

        {/* First Row of Franchises */}
        <div className="pump">
          <div className="container-pump">

            {/* Nayara */}
            <div className="container1">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">Nayara</h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={nayara} alt="Nayara" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>1555</strong></p>
                    <p>Franchising Launch Date: <strong>1932</strong></p>
                    <button className="info-btn">
                      <a href="https://www.nayaraenergy.com/retail/petrol-pump-dealership-apply" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 3 Cr - 5 Cr</strong></p>
                  <p>Space required: <strong>800-1200 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>6,000+ (India)</strong></p>
                  <p>Franchise Type: <strong>Petrol Pump Franchise</strong></p>
                  <p>Headquarter: <strong>Mumbai, Maharashtra, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.9</div>
                </div>
              </div>
            </div>

            {/* IOCL */}
            <div className="container2">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">IOCL</h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={iocl} alt="IOCL" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>1992</strong></p>
                    <p>Franchising Launch Date: <strong>2000</strong></p>
                    <button className="info-btn">
                      <a href="https://iocl.com/pages/ro-ksk-dealerships-overview" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 2 Cr - 6 Cr</strong></p>
                  <p>Space required: <strong>1000 - 2000 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>34,000 +</strong></p>
                  <p>Franchise Type: <strong>Retail Outlet (Petrol Pump)</strong></p>
                  <p>Headquarter: <strong>New Delhi, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.6</div>
                </div>
              </div>
            </div>

            {/* Reliance Petroleum */}
            <div className="container3">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">Reliance </h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={reliance} alt="Reliance Petroleum" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>2006</strong></p>
                    <p>Franchising Launch Date: <strong>2009</strong></p>
                    <button className="info-btn">
                      <a href="https://www.lendingkart.com/blog/reliance-petrol-pump-dealership/" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 2 Cr - 6 Cr</strong></p>
                  <p>Space required: <strong>800 - 1500 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>1400+</strong></p>
                  <p>Franchise Type: <strong>Retail Outlet</strong></p>
                  <p>Headquarter: <strong>Mumbai, Maharashtra, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.5</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Second Row of Franchises */}
        <div className="pump">
          <div className="container-pump">

            {/* Shell */}
            <div className="container1">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">Shell</h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={shell} alt="Shell" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>1555</strong></p>
                    <p>Franchising Launch Date: <strong>1932</strong></p>
                    <button className="info-btn">
                      <a href="https://www.shell.in/business-customers/business-opportunity-shell-retailership.html#iframe=L2Zvcm1zL3NoZWxsX3JldGFpbGVyX3Byb2dyYW1faW5fZW4" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 3 Cr - 5 Cr</strong></p>
                  <p>Space required: <strong>800-1200 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>6,000+ (India)</strong></p>
                  <p>Franchise Type: <strong>Petrol Pump Franchise</strong></p>
                  <p>Headquarter: <strong>Mumbai, Maharashtra, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.9</div>
                </div>
              </div>
            </div>

            {/* HP */}
            <div className="container2">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">HP</h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={hp} alt="HP" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>1992</strong></p>
                    <p>Franchising Launch Date: <strong>2000</strong></p>
                    <button className="info-btn">
                      <a href="https://hindustanpetroleum.com/pages/petrol-pump-dealership-cocos" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 2 Cr - 6 Cr</strong></p>
                  <p>Space required: <strong>1000 - 2000 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>34,000 +</strong></p>
                  <p>Franchise Type: <strong>Retail Outlet (Petrol Pump)</strong></p>
                  <p>Headquarter: <strong>New Delhi, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.6</div>
                </div>
              </div>
            </div>

            {/* Jio BP */}
            <div className="container3">
              <div className="franchise-card">
                <div className="franchise-header">
                  <h2 className="franchise-name">Jio bp</h2>
                  <span className="verified">✔ Verified</span>
                </div>
                <div className="franchise-content">
                  <div className="franchise-photo">
                    <p><img src={jiobp} alt="Jio BP" /></p>
                  </div>
                  <div className="franchise-details">
                    <p>Locations looking for expansion<br />Delhi, Haryana, Himachal Pradesh, ... +22 more</p>
                    <p>Establishment year: <strong>2006</strong></p>
                    <p>Franchising Launch Date: <strong>2009</strong></p>
                    <button className="info-btn">
                      <a href="https://www.jiobp.com/partners" target="_blank" rel="noreferrer">Apply for dealership</a>
                    </button>
                  </div>
                </div>
                <div className="investment-info">
                  <p>Investment size: <strong>INR 2 Cr - 6 Cr</strong></p>
                  <p>Space required: <strong>800 - 1500 sq.ft</strong></p>
                  <p>Franchise Outlets: <strong>1400+</strong></p>
                  <p>Franchise Type: <strong>Retail Outlet</strong></p>
                  <p>Headquarter: <strong>Mumbai, Maharashtra, India</strong></p>
                </div>
                <div className="franchise-footer">
                  <div className="rating">⭐ 4.5</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Pump;
