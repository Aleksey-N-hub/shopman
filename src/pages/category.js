import React, { Component } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import ProductList from "../containers/productList";

export default class Category extends Component {
  state = {
    category: this.props.match.params.slug,
  };

  static contextType = Context;

  render() {
    const { getCategoryProducts } = this.context;
    const products = getCategoryProducts(this.state.category);

    if (!products) {
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
          <ProductList products={products} />
        </div>
      </section>
    );
  }
}
