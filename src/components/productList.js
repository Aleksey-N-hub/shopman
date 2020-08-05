import React from "react";
import { Link } from "react-router-dom";
import ProductCell from "./productCell";

export default function productList(props) {
  const { products, like, cart } = props;
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
      {products.map((el, id) => {
        return (
          <Link to={`/products/${el.slug}`} key={id}>
            <ProductCell
              like={like}
              cart={cart}
              discount={el.discount}
              new={el.new}
              src={el.pictures[0].fields.file.url}
              name={el.name}
              description={el.descr}
              price={el.price}
              stars={el.stars}
              reviews={el.reviews}
            />
          </Link>
        );
      })}
    </section>
  );
}
