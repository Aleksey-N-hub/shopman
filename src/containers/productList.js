import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import ProductCell from "../components/productCell";

function productList(props) {
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
    <BrowserRouter>
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
                clicked={() => clicked(el.slug)}
              />
            );
          })}
        </div>
      </section>
    </BrowserRouter>
  );
}

export default productList;
