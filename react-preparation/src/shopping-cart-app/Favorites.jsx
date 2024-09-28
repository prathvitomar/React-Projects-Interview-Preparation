import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";

function Favorites() {
  const productData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCartItem = (productId) => {
    dispatch(removeFromCart(productId))
    console.log(product)
  };

  return (
    <>
      <div>
        {productData && productData.length ? (
          productData.map((product) => (
            <>
              <div className="container card" key={product.id}>
                <div style={{ marginRight: "25px" }}>
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
                  <p style={{ fontSize: "12px" }}>{product.description}</p>
                  <h5>{product.category}</h5>
                  <button onClick={() => removeCartItem(product.id)}>Remove from Favorite</button>
                </div>
              </div>
            </>
          ))
        ) : (
          <h1>There's Nothing Added in your Favorite List</h1>
        )}
      </div>
    </>
  );
}

export default Favorites;
