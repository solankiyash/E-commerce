  import React, { useContext } from 'react';
  import "./CartItem.css";
  import { ShopContext } from '../../Context/ShopContext';
  import removeicon from "../../Assetes/cart_cross_icon.png";

  function CartItems() {
    const { cart,MatchPromocode , handelChange, removeToCart ,getTotalAmount,promocodeValue } = useContext(ShopContext);
    
    return (
      <div className='cartitems'>
        <div className="cartitem-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remov</p>
        </div>
        <hr />
        {cart?.map((item) => (
          <div key={item.id}>
            <div className="cartitem-format cartitem-format-main">
              <img src={item.image} alt="" className='carticon-product-icon'/>
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className='cartitem-quantity'>  
                {item.quantity}
              </button>
              <p>${item.new_price * item.quantity}</p>
              <img className='carditem-remove-item' src={removeicon} onClick={() => removeToCart(item)} alt="" />
            </div>
            <hr />
          </div>
        ))}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart Total</h1>
          <div>
            <div className='cartitem-total-item'>
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
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className='cartitem-promobox'>
            <input onChange={handelChange} value={promocodeValue}  type="text" placeholder='promo code' />
            <button onClick={()=>MatchPromocode("promocode")}>Submit</button>
          </div>
        </div>
      </div>
      </div>
    );
  }

  export default CartItems;
