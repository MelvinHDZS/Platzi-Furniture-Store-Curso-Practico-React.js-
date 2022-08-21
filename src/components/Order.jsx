import React from "react";
import "../styles/Order.scss";
const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>0.3.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src="../assets/icons/flechita.svg" alt="arow" />
    </div>
  );
};

export default Order;
