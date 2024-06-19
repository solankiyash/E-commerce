import React, { useContext, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import removeicon from "../../Assetes/cart_cross_icon.png";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function CartItems() {
  const {
    cart,
    MatchPromocode,
    handelChange,
    removeToCart,
    getTotalAmount,
    promocodeValue,
  } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickCheckout = async () => {
    console.log("cart", cart);
    let amount = getTotalAmount();

    const stripePromise = await loadStripe(
      "pk_test_51PQQCu2NJpcN49oVE6dZ8YA4eWoLEsySfzWGb8lGv1QITXwIkdeRZ3uJ76Go6mQi7rXgyZzBkK2JDbiRt7bTpms400eS5zpV6U"
    );

    try {
      const response = await axios.post("http://localhost:4000/payment", {
        amount,
        category: cart[0].category, // Assuming single category for simplicity
        quantity: cart.length, // Total number of items
        size: cart.map((i) => i.size).flat(), // Flattened array of sizes
        image: cart[0].image, // Assuming single image for simplicity
      });

      const session = response.data;
      const stripe = await stripePromise;

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        console.log(result.error.message);
        // Handle error here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Category</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cart.length <= 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
            color: "gray",
            paddingTop: "20px",
          }}
        >
          No Products
        </p>
      ) : (
        <div className="items">
          <hr />
          {cart?.map((item) => {
            return (
              <div key={item.id}>
                <div className="cartitem-format cartitem-format-main">
                  <img
                    src={item.image}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{item.category}</p>
                  <p>${item.new_price}</p>
                  <p>{item.size.join(" , ")}</p>
                  <button className="cartitem-quantity">{item.quantity}</button>
                  <p>${item.new_price * item.quantity}</p>
                  <img
                    className="carditem-remove-item"
                    src={removeicon}
                    onClick={() => removeToCart(item)}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}

      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button onClick={handleClickCheckout} disabled={isLoading}>
            {isLoading ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitem-promobox">
            <input
              onChange={handelChange}
              value={promocodeValue}
              type="text"
              placeholder="promo code"
            />
            <button onClick={() => MatchPromocode("promocode")}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
