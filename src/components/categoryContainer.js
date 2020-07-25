import React from "react";
import ProductsFilter from "./productsFilter";
import ProductsList from "./productList";
import { withConsumer } from "../context";
import Loading from "./loading";

function categoryContainer({ context }) {
  const { loading, sortedProducts, products } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductsFilter products={products} />
      <ProductsList products={sortedProducts} />
    </>
  );
}

export default withConsumer(categoryContainer);
