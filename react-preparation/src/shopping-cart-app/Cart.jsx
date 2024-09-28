import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

function Cart({ product }) {
  const dispatch = useDispatch();

  const AddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };

  return (
    <>
      <div className="container card">
        <div style={{marginRight : "25px"}}>
          <img
            className="post-iamge"
            width={"150px"}
            src={product.image}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
        </div>
        <div>
          <p style={{fontSize: "12px"}}>{product.description}</p>
          <h5>{product.category}</h5>
          <button onClick={() => AddToCart(product)}>Add to Favorite</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
