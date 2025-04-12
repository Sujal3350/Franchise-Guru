import React from 'react'
import bata from '../../assets/bata.png';
import woodland from '../../assets/woodland.png';
import puma from '../../assets/puma.png';

import nike from '../../assets/nike.jpg';
import adidas from '../../assets/adidas.png';
import reebok from '../../assets/reebok.png';
import './Retail.css';

function Retail() {
  return (
    <>
    <div className="ro">

    <div className="retail">
    <div className="container-retail">
      <div className="container1">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Bata</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={bata} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1894</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1932</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh - 1 Cr</strong>
            </p>
            <p>
              Space required: <strong>500-1500 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>1500 Retail stores</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise</strong>
            </p>
            <p>
              Headquarter: <strong>Gurugram, Haryana, India</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.9</div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">WoodLand</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={woodland} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1992</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2000</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 50 Lakh Up to 1 Cr</strong>
            </p>
            <p>
              Space required: <strong>1000 - 2000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>5000 multi-retail outlets</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise </strong>
            </p>
            <p>
              Headquarter: <strong>New Delhi,India</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.6</div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Puma</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={puma} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>2006</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2009</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 50 Lakh - 2 Cr</strong>
            </p>
            <p>
              Space required: <strong>800 - 1500 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>370</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise</strong>
            </p>
            <p>
              Headquarter: <strong>Bengaluru, Karnataka, India</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.5</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="retail">
    <div className="container-shoes">
      <div className="container1">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Nike</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={nike} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1894</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1932</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh - 1 Cr</strong>
            </p>
            <p>
              Space required: <strong>500-1500 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>1500 Retail stores</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise</strong>
            </p>
            <p>
              Headquarter: <strong>Gurugram, Haryana, India</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.9</div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Adidas</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={adidas} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1992</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2000</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 50 Lakh Up to 1 Cr</strong>
            </p>
            <p>
              Space required: <strong>1000 - 2000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>5000 multi-retail outlets</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise </strong>
            </p>
            <p>
              Headquarter: <strong>New Delhi,India</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.6</div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Reebok</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={reebok} alt="error" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>2006</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2009</strong>
              </p>
              <button className="info-btn">Apply for dealership</button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 50 Lakh - 2 Cr</strong>
            </p>
            <p>
              Space required: <strong>800 - 1500 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>370</strong>
            </p>
            <p>
              Franchise Type: <strong>Retail Franchise</strong>
            </p>
            <p>
              Headquarter: <strong>Bengaluru, Karnataka, India</strong>
            </p>
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
  )
}

export default Retail