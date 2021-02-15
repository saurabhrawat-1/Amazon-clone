import React, { useContext } from "react";
import "./Greeting.css";
import shopping from "../../Asset/order.png";
import { useHistory } from "react-router-dom";

function Greeting() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div className="greeting">
      <h1>Thank you for Shopping </h1>
      <h3>Your order will be delivered soon !</h3>
      <h6>keep Shopping with us.</h6>
      <div className="container">
        <img src={shopping} alt="" />
        <button onClick={goToHome}>Shop More</button>
      </div>
    </div>
  );
}

export default Greeting;
