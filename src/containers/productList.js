import React from "react";
import { Link } from "react-router-dom";
import ProductCell from "../components/productCell";

export default function productList(props) {
  const { products, clicked } = props;
  console.log(props);
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
            <Link to={`/products/${el.slug}`}>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
