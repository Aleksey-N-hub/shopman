import React, { Component } from "react";
import { Context } from "../context";
import LikeCell from "../components/likeCell";
import "./like.css";

export default class cart extends Component {
  static contextType = Context;

  render() {
    const { likes, addToCartHandler, likeProductHandler } = this.context;

    if (!likes) {
      return <div>no items in Wishlist</div>;
    }

    return (
      <div className="like">
        <h1 className="title">Your Wishlist</h1>
        {likes.map((el, id) => {
          return (
            <LikeCell
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
              add={addToCartHandler}
              remove={likeProductHandler}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}
