import React, { useContext } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { stateContext } from "../../StateProvider";
import offer from "../../Asset/amazon_offer_banner3.jpg";

function Checkout() {
  const globalContext = useContext(stateContext);
  const {
    state: { basket, user },
  } = globalContext;

  return (
    <div className="checkout">
      <div className="checkout__top">
        <div className="checkoutTop__left">
          <img src={offer} alt="Amazon-offer-banner" />
          <p>
            Hello,{" "}
            <span>
              <b>{user?.email}</b>
            </span>
          </p>
        </div>
        {basket?.length && <Subtotal />}
      </div>

      <div className="checkout__bottom">
        {basket?.length ? (
          <h4>Your Shopping Basket</h4>
        ) : (
          <h4>Your Basket is Empty ! Add Some items</h4>
        )}
        {basket?.map((item, i) => (
          <CheckoutProduct
            key={i}
            image={item?.image}
            id={item?.id}
            title={item?.title}
            price={item?.price}
            rating={item?.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
