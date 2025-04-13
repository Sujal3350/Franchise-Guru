import React from 'react';
import dominos from '../../assets/dominos.png';
import haldiram from '../../assets/haldiram.png';
import subway from '../../assets/subway.png';
import burgerking from '../../assets/burgerking.jpg';
import lapinoz from '../../assets/lapinoz.jpg';
import martinoz from '../../assets/martinoz.jpg';
import './Food.css';

const Food = () => {
  return (
    <>
   <div className="fo">
    <div className="food">
    <div className="container-food">
      <div className="container1">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Domino's</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={dominos} alt="Domino's" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1960</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1967</strong>
              </p>
              <button className="info-btn"><a href=" https://biz.dominos.com/about-us/franchising/" target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh - 50 Lakh</strong>
            </p>
            <p>
              Space required: <strong>1500-2000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>20,591 Restaurants</strong>
            </p>
            <p>
              Franchise Type: <strong>Fixed stores and Nonfixed stores</strong>
            </p>
            <p>
              Headquarter: <strong>Noida, Uttar Pradesh, India</strong>
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
            <h2 className="franchise-name">Haldiram's</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={haldiram} alt="Haldiram's" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1937</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1970</strong>
              </p>
              <button className="info-btn"><a href=" https://www.haldiram.com/dealership" target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh Up to 5 Cr</strong>
            </p>
            <p>
              Space required: <strong>150 - 5000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>150 +</strong>
            </p>
            <p>
              Franchise Type: <strong>Ready to eat Food product</strong>
            </p>
            <p>
              Headquarter: <strong>Noida</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.4</div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">SUBWAY</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={subway} alt="SUBWAY" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>2013</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2014</strong>
              </p>
              <button className="info-btn"><a href=" https://www.subwayfranchise.com/en-us/contact-us" target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 24 Lakh - 30 Lakh</strong>
            </p>
            <p>
              Space required: <strong>170-350 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>37,000</strong>
            </p>
            <p>
              Franchise Type: <strong>Fixed stores and Nonfixed stores</strong>
            </p>
            <p>
              Headquarter: <strong>Gurgaon, Delhi</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.5</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="food">
    <div className="container-food">
      <div className="container1">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">Lapino'z</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={lapinoz} alt="Domino's" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1960</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1967</strong>
              </p>
              <button className="info-btn"><a href="https://lapinozpizza.in/franchise-enquiry " target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh - 50 Lakh</strong>
            </p>
            <p>
              Space required: <strong>1500-2000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>20,591 Restaurants</strong>
            </p>
            <p>
              Franchise Type: <strong>Fixed stores and Nonfixed stores</strong>
            </p>
            <p>
              Headquarter: <strong>Noida, Uttar Pradesh, India</strong>
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
            <h2 className="franchise-name">Martino'z</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={martinoz} alt="martinoz" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>1937</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>1970</strong>
              </p>
              <button className="info-btn"><a href=" https://martinozpizza.com/franchise-enquiry" target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 30 Lakh Up to 5 Cr</strong>
            </p>
            <p>
              Space required: <strong>150 - 5000 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>150 +</strong>
            </p>
            <p>
              Franchise Type: <strong>Ready to eat Food product</strong>
            </p>
            <p>
              Headquarter: <strong>Noida</strong>
            </p>
          </div>
          <div className="franchise-footer">
            <div className="rating">⭐ 4.4</div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="franchise-card">
          <div className="franchise-header">
            <h2 className="franchise-name">BurgerKing</h2>
            <span className="verified">✔ Verified</span>
          </div>
          <div className="franchise-content">
            <div className="franchise-photo">
              <p><img src={burgerking} alt="burgerking" /></p>
            </div>
            <div className="franchise-details">
              <p>
                Locations looking for expansion
                <br />
                Delhi, Haryana, Himachal Pradesh, ... +22 more
              </p>
              <p>
                Establishment year: <strong>2013</strong>
              </p>
              <p>
                Franchising Launch Date: <strong>2014</strong>
              </p>
              <button className="info-btn"><a href="https://franchising.bk.com/franchise-process " target='_blank'>Apply for dealership </a></button>
            </div>
          </div>
          <div className="investment-info">
            <p>
              Investment size: <strong>INR 24 Lakh - 30 Lakh</strong>
            </p>
            <p>
              Space required: <strong>170-350 sq.ft</strong>
            </p>
            <p>
              Franchise Outlets: <strong>37,000</strong>
            </p>
            <p>
              Franchise Type: <strong>Fixed stores and Nonfixed stores</strong>
            </p>
            <p>
              Headquarter: <strong>Gurgaon, Delhi</strong>
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
  );
};

export default Food;
