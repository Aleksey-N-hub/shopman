import React, { Component } from "react";
import { Context } from "../context";
import BasketCell from "../components/basketCell";
import "./cart.css";

export default class cart extends Component {
  static contextType = Context;

  render() {
    const { cart, removeFromCartHandler } = this.context;
    if (!cart) {
      return <div>no items in Cart</div>;
    }
    let total = cart.reduce((a, b) => a + b.price, 0);

    return (
      <div className="cart">
        <div className="cart__subtotal">
          <h2 className="cart__subtotalTitle">Subtotal:</h2>({cart.length}{" "}
          items): <strong>{total.toFixed(2)}$</strong>
          <br />
          <small className="cart__subtotalGift">
            <input type="checkbox" /> This order contains a gift
          </small>
          <br />
          <button className="cart__subtotalButton">Proceed to Checkout</button>
        </div>

        <h1 className="title">Your Cart</h1>
        {cart.map((el, id) => {
          return (
            <BasketCell
              key={id}
              size={el.size}
              discount={el.discount}
              src={el.pictures[0].fields.file.url}
              name={el.name}
              descr={el.descr}
              price={el.price}
              stars={el.stars}
              reviews={el.reviews}
              slug={el.slug}
              remove={removeFromCartHandler}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}
