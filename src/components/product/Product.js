import React, { useContext } from "react";
import "./Product.css";
import { stateContext } from "../../StateProvider";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, image, price, rating, u_id }) {
  const globalContext = useContext(stateContext);
  const {
    state: { basket },
    dispatch,
  } = globalContext;

  const addToBasket = () => {
    toast.success("Product Added Successufly!", { autoClose: 1000 });

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={u_id * Math.random() * 10}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
