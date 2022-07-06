import React from "react";
import "./OrderConfirmation.css";


function OrderConfirmation() {
    return (
      <div className='desktop8-container'>
        <img className="tick_image" src="/pink_tick.png" alt="pink tick" />
        <div className="desktop8-main">
            <h1 className="desktop8-heading">Your Order Is Confirmed!</h1>
            <p className="desktop8-description">Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.</p>
        </div>
        <button className="continue-shopping-btn">Continue Shopping</button>
        {/* <div className="continue-shopping-btn">
            <input
                type="submit"
                value="Continue Shopping"
                id="continue-shopping-btn"/>
        </div> */}
      </div>
    )
  }
  export default OrderConfirmation;