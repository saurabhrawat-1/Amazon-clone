import React from "react";
import "./Body.css";
import { Carousel } from "react-bootstrap";
import ProductScroll from "../product/ProductScroll";

//Banner images
import banner_1 from "../../Asset/amazon_banner_1.jpg";
import banner_2 from "../../Asset/amazon_banner_2.jpg";
import banner_3 from "../../Asset/amazon_banner_3.jpg";
import banner_4 from "../../Asset/amazon_banner_4.jpg";
import banner_5 from "../../Asset/amazon_banner_5.jpg";
import banner_6 from "../../Asset/amazon_banner_6.jpg";
import banner_7 from "../../Asset/amazon_banner_7.jpg";
import banner_8 from "../../Asset/amazon_banner_8.jpg";
import banner_9 from "../../Asset/amazon_banner_9.jpg";
import Product from "../product/Product";
import lang_banner from "../../Asset/amazon_lang_banner.jpg";

//Product images
import tv from "../../Asset/dispaly_image_tv.jpg";
import watch from "../../Asset/display_image_watch.jpg";
import macbook from "../../Asset/display_image_mac.jpg";
import refrigirator from "../../Asset/display_image_refrigirator.jpg";
import ipad from "../../Asset/display_img_ipad.jpg";
import speaker from "../../Asset/display_image_jbl2.jpg";
import img from "../../Asset/offer_image.jpg";
import sofa from "../../Asset/display_image_sofa.jpg";
import console from "../../Asset/dispay_image_console.jpg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <Carousel className="body__image">
          <Carousel.Item>
            <img className="body__image" src={banner_1} alt="First-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_2} alt="Second-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_3} alt="Third-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_4} alt="Fourth-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_5} alt="Fifth-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_6} alt="Sixth-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_7} alt="Seventh-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_8} alt="Eighth-slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="body__image" src={banner_9} alt="Ninth-slide" />
          </Carousel.Item>
        </Carousel>

        <div className="body__row">
          <Product
            u_id={1}
            id="123456"
            title="New Apple Watch Series 6 (GPS, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
            price={43900}
            rating={5}
            image={watch}
          />

          <Product
            u_id={2}
            id="789012"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
            price={120000}
            rating={5}
            image={macbook}
          />

          <div className="part__sections">
            <div className="signin__container">
              <h4>Sign in for your best experience</h4>
              <Link to="/login">
                <button>Sign in Securely</button>
              </Link>
            </div>
            <img src={img} alt="offer" />
          </div>
        </div>

        <div className="body__row">
          <Product
            u_id={3}
            id="210987"
            title="Panasonic 584 L Inverter Frost-Free Side by Side Refrigerator (NR-BS60VKX1, Dark Grey, Stainless Steel Finish)"
            price={58900}
            image={refrigirator}
            rating={4}
          />
          <Product
            u_id={4}
            id="987654"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Grey (2nd Generation)"
            price={84900}
            rating={5}
            image={ipad}
          />

          <Product
            u_id={5}
            id="456789"
            title="xbox series- s"
            price={34900}
            image={console}
            rating={3}
          />
        </div>

        <div className="productScroll__container">
          <ProductScroll
            prop1="Today's deal"
            prop2="see all deals"
            bool={true}
          />
          <ProductScroll prop3="Best Seller in Sports, Fitness and Outdoors" />
        </div>
        <div className="body__row">
          <Product
            u_id={6}
            id="654321"
            title="Sony Bravia 189.3 cm (75 inches) 4K Ultra HD Smart Certified Android LED TV 75X9500H (Black) (2020 Model)"
            price={350000}
            rating={5}
            image={tv}
          />
        </div>
        <div className="body__row">
          <Product
            u_id={7}
            id="456789"
            title="JBL Flip 3 Stealth Waterproof Portable Bluetooth Speaker with Rich Deep Bass (Black), Without Mic"
            price={5499}
            image={speaker}
            rating={5}
          />

          <Product
            u_id={8}
            id="654321"
            title="Furny Winchester 6 Seater Interchangeable L Shape Sofa Set in Leatherette (Black)"
            price={499}
            rating={4}
            image={sofa}
          />
        </div>
        <img className="lang__banner" src={lang_banner} alt="" />
      </div>
    </div>
  );
}

export default Body;
