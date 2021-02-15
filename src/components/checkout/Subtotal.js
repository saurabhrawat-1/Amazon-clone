import React, { useContext, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { stateContext } from "../../StateProvider";
import { useHistory, Link } from "react-router-dom";

function Subtotal() {
  const [address, setAddress] = useState("");

  const globalContext = useContext(stateContext);
  const {
    state: { basket, user },
    dispatch,
  } = globalContext;

  //selector
  const getBasketTotal = basket?.reduce(
    (amount, item) => item.price + amount,
    0
  );

  const history = useHistory();

  const handleClick = () => {
    const address = prompt("Enter Delivery Address: ");
    setAddress(address);

    dispatch({
      type: "ADD_ADDRESS",
      address: address,
    });
    history.push("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <button onClick={handleClick}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
