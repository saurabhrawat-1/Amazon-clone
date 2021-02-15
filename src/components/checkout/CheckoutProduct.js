import React, { useContext } from "react";
import { stateContext } from "../../StateProvider";
import "./CheckoutProduct.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({ id, image, title, price, rating, description }) {
  const globalContext = useContext(stateContext);
  const { dispatch } = globalContext;

  const removeFromBasket = () => {
    toast.error("Product Removed", { autoClose: 1000 });

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__product">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
      <div className="checkoutProductBank__offers">
        <span>
          Will be Delivered within <strong>Four days after Order</strong>
        </span>
        <p>Free Delivery by Amazon</p>
        <h4>In stock</h4>
        <div className="bank_offers">
          <h6>Bank Offers</h6>
          <ul>
            <li>
              Get 7.5% up to Rs. 1500 Instant Discount on Yes Bank Credit Card
              EMI transactions.
            </li>
            <li>
              Get 7.5% up to Rs. 1500 Instant Discount on Bank of Baroda Credit
              Card EMI transactions.
            </li>
            <li>5% Instant discount with HSBC Cashback card Here's how </li>
            <li>
              No Cost EMI: No cost EMI available on select cards. Please check
              'EMI options' above for more details.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
