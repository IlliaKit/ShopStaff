import React, { useState } from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import Order from "./Order";

const showOrders = (props, setCartOpen, cartOpen) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += el.count * Number.parseFloat(el.price)));
  return (
    <div>
      <AiFillCloseCircle
        className="item-close"
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
      />
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">Sum: {parseInt(sum * 100) / 100}$</p>
    </div>
  );
};
const showNothing = (setCartOpen, cartOpen) => {
  return (
    <div className="empty">
      <AiFillCloseCircle
        className="item-close"
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
      />
      <h2>No products</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="wrap">
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About</li>
          <li>Contact</li>
          <li>My page</li>
        </ul>
        <AiTwotoneShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0
              ? showOrders(props, setCartOpen, cartOpen)
              : showNothing(setCartOpen, cartOpen)}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
