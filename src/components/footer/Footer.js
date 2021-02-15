import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div
        className="top"
        onClick={() => (document.documentElement.scrollTop = 0)}
      >
        Back to top
      </div>
      <div className="links__container">
        <div className="col">
          <p>Get to Know Us</p>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>press Releases</li>
            <li>Amazon cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="col">
          <p> Connect with Us</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="col">
          <p>Make Money with Us</p>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            <li>Fullfillment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon pay on Merchants</li>
          </ul>
        </div>
        <div className="col">
          <p>Let Us Help You</p>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Center</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="countries">
        <div className="countries__top">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          <div className="option">
            <select name="cars" id="cars">
              <option value="volvo">English</option>
              <option value="saab">Hindi</option>
              <option value="mercedes">Espanol</option>
              <option value="audi">German</option>
            </select>
          </div>
        </div>
        <div className="countries__bottom">
          <ul>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Itay</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div className="dark__pannel">
        <div className="darkPannel__top">
          <div className="col">
            <p>AbeBooks</p>
            <ul>
              <li>Books, art</li>
              <li>& collections</li>
            </ul>
          </div>
          <div className="col">
            <p>Amazon Web Services</p>
            <ul>
              <li>scalable Cloud</li>
              <li>Computing Services</li>
            </ul>
          </div>
          <div className="col">
            <p>Audible</p>
            <ul>
              <li>Download</li>
              <li>Audio Books</li>
            </ul>
          </div>
          <div className="col">
            <p>DPReview</p>
            <ul>
              <li>Digital </li>
              <li>Photograhy</li>
            </ul>
          </div>
          <div className="col">
            <p>IMDB</p>
            <ul>
              <li>Movies, TV</li>
              <li>& Collection</li>
            </ul>
          </div>
        </div>

        <div className="darkPannel__line"></div>

        <div className="darkPannel__bottom">
          <div className="col">
            <p>Shopbop</p>
            <ul>
              <li>Designer</li>
              <li>Fashion Brands</li>
            </ul>
          </div>
          <div className="col">
            <p>Amazon Business</p>
            <ul>
              <li>Everything For</li>
              <li>Your Business</li>
            </ul>
          </div>
          <div className="col">
            <p>Prime Now</p>
            <ul>
              <li>2-Hour Delivery</li>
              <li>on Everyday Items</li>
            </ul>
          </div>
          <div className="col">
            <p>Amazon Prime Music</p>
            <ul>
              <li>70 million songs, add-free</li>
            </ul>
          </div>
        </div>
        <p>
          <span> Fake Conditions of Use and Sale</span>
          <span>Fake Privacy Notice</span>
          <span>All Rights are reserved by Rawat Groups</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
