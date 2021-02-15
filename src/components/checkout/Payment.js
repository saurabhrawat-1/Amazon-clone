import React, { useContext, useState, useEffect } from "react";
import "./Payment.css";
import { stateContext } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Payment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const globalContext = useContext(stateContext);
  const {
    state: { user, basket, address },
    dispatch,
  } = globalContext;

  const history = useHistory();
  const getBasketTotal = basket?.reduce(
    (amount, item) => item.price + amount,
    0
  );

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Your Order Will be dilevered soon! Keep ordering");
    history.replace("/greeting");

    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h4>Delivery Details</h4>
          </div>
          <div className="payment__address">
            <p>
              <span>To:</span>
              {"    "} <b>{user?.email}</b>
            </p>
            <span>Address:</span>
            {"  "}
            <b>{address}</b>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h4>Review Items and Deivery</h4>
          </div>

          <div className="payment__items">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h4>Payment Method</h4>
            <span>
              <b>(Enter your card details)</b>
            </span>
          </div>
          <div className="paymentDetails__container">
            <div className="payment__details">
              <Cards
                className="card"
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
              <form>
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY Expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />

                <button
                  type="submit"
                  onClick={handlePayment}
                  disabled={basket?.length === 0 ? "disabled" : ""}
                >
                  Pay Securely
                </button>
              </form>
            </div>
            <div className="payment__totalamount">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h6>Order Total: </h6>
                    <h2>{value}</h2>
                    <h6>Total ({basket?.length} items) in your Cart </h6>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs."}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
