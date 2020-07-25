import React from "react";
import { useContext } from "react";
import { Context } from "../context";

// const getUnique = (items, value) => {
//   return [...new Set(items.map((item) => item[value]))];
// };

export default function ProductsFilter({ products }) {
  const context = useContext(Context);
  const {
    handleChange,
    sorting,
    price,
    size,
    minPrice,
    maxPrice,
    discount,
    colour,
    reviews,
    category,
  } = context;
  //   let sizes = getUnique(products, "size");
  let sizes = ["all", ...size];
  //   sizes = [ ...sizes];
  sizes = sizes.map((el, id) => {
    return (
      <option value={el} key={id}>
        {el}
      </option>
    );
  });

  return (
    <section className="filter-Container">
      <div className="form-group">
        <label htmlFor="type">size</label>
        <select
          name="size"
          id="size"
          className="form-control"
          onChange={handleChange}
        >
          {sizes}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Product price ${price}</label>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={70}
          id="price"
          value={price}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <select onChange={sorting}>
        <option value="low">LOW PRICE</option>
        <option value="high">HIGH PRICE</option>
        <option value="popular">POPULAR</option>
        <option value="sale">SALE</option>
      </select>
    </section>
  );
}
