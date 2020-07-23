import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCell from "../components/category";

export default function productList({ products }) {
  if (products.length === 0) {
    return (
      <div>
        <h2>no such category could be found...</h2>
        <Link>Back to</Link>
      </div>
    );
  }

  return (
    <section className="categoryList">
      <div className="categories-main">
        {products.map((el, id) => {
          return (
            <ProductCell
              key={id}
              discount={el.discount}
              new={el.new}
              src={el.pictures[0].fields.file.url}
              name={el.name}
              description={el.descr}
              price={el.price}
              stars={el.stars}
              reviews={el.reviews}
            />
          );
        })}
      </div>
    </section>
  );
}
