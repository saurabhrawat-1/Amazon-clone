import React from "react";
import "./ProductScroll.css";

// images (Today's deal):
import img1 from "../../Asset/todays_deal_img1.jpg";
import img2 from "../../Asset/todays_deal_img2.jpg";
import img3 from "../../Asset/todays_deal_img3.jpg";
import img4 from "../../Asset/todays_deal_img4.jpg";
import img5 from "../../Asset/todays_deal_img5.jpg";
import img6 from "../../Asset/todays_deal_img6.jpg";
import img7 from "../../Asset/todays_deal_img7.jpg";
import img8 from "../../Asset/todays_deal_img8.jpg";
import img9 from "../../Asset/todays_deal_img9.jpg";
import img10 from "../../Asset/todays_deal_img10.jpg";
import img11 from "../../Asset/todays_deal_img11.jpg";
import img12 from "../../Asset/todays_deal_img12.jpg";
import img13 from "../../Asset/todays_deal_img13.jpg";
import img14 from "../../Asset/todays_deal_img14.jpg";
import img15 from "../../Asset/todays_deal_img15.jpg";

//images(Fitness)
import i1 from "../../Asset/fitness_img1.jpg";
import i2 from "../../Asset/fitness_img2.jpg";
import i3 from "../../Asset/fitness_img3.jpg";
import i4 from "../../Asset/fitness_img4.jpg";
import i5 from "../../Asset/fitness_img5.jpg";
import i6 from "../../Asset/fitness_img6.jpg";
import i7 from "../../Asset/fitness_img7.jpg";
import i8 from "../../Asset/fitness_img8.jpg";
import i9 from "../../Asset/fitness_img9.jpg";
import i10 from "../../Asset/fitness_img10.jpg";
import i11 from "../../Asset/fitness_img11.jpg";
import i12 from "../../Asset/fitness_img12.jpg";
import i13 from "../../Asset/fitness_img13.jpg";
import i14 from "../../Asset/fitness_img14.jpg";
import i15 from "../../Asset/fitness_img15.jpg";

function ProductScroll({ prop1, prop2, prop3, bool }) {
  return (
    <div className="product__scroll">
      {bool ? (
        <div>
          <span className="large">Today's Deals</span>
          <a href="#" className="small">
            see all deals
          </a>
        </div>
      ) : (
        <span className="large">Best Sellers in Sports,Fitness & Outdoors</span>
      )}
      <div className="scroll__container">
        {bool ? (
          <img className="img" src={img1} alt="" />
        ) : (
          <img className="img" src={i1} alt="" />
        )}
        {bool ? (
          <img className="img" src={img2} alt="" />
        ) : (
          <img className="img" src={i2} alt="" />
        )}
        3
        {bool ? (
          <img className="img" src={img3} alt="" />
        ) : (
          <img className="img" src={i3} alt="" />
        )}
        {bool ? (
          <img className="img" src={img4} alt="" />
        ) : (
          <img className="img" src={i4} alt="" />
        )}
        {bool ? (
          <img className="img" src={img5} alt="" />
        ) : (
          <img className="img" src={i5} alt="" />
        )}
        {bool ? (
          <img className="img" src={img6} alt="" />
        ) : (
          <img className="img" src={i6} alt="" />
        )}
        {bool ? (
          <img className="img" src={img7} alt="" />
        ) : (
          <img className="img" src={i7} alt="" />
        )}
        {bool ? (
          <img className="img" src={img8} alt="" />
        ) : (
          <img className="img" src={i8} alt="" />
        )}
        {bool ? (
          <img className="img" src={img9} alt="" />
        ) : (
          <img className="img" src={i9} alt="" />
        )}
        {bool ? (
          <img className="img" src={img10} alt="" />
        ) : (
          <img className="img" src={i10} alt="" />
        )}
        {bool ? (
          <img className="img" src={img11} alt="" />
        ) : (
          <img className="img" src={i11} alt="" />
        )}
        {bool ? (
          <img className="img" src={img12} alt="" />
        ) : (
          <img className="img" src={i12} alt="" />
        )}
        {bool ? (
          <img className="img" src={img13} alt="" />
        ) : (
          <img className="img" src={i13} alt="" />
        )}
        {bool ? (
          <img className="img" src={img14} alt="" />
        ) : (
          <img className="img" src={i14} alt="" />
        )}
        {bool ? (
          <img className="img" src={img15} alt="" />
        ) : (
          <img className="img" src={i15} alt="" />
        )}
      </div>
    </div>
  );
}

export default ProductScroll;
