import React, { Component } from "react";
import Client from "./Contentful";

const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    price: 0,
    size: "all",
    new: false,
    discount: 0,
    colour: "",
    material: "",
    stars: 0,
    reviews: 0,
    category: false,
    featured: false,
    alsoBought: [],
    alsoLike: [],
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "shopman",
        // order: "sys.createdAt",
        // order: "fields.price",
      });
      console.log(response);

      let products = this.formatData(response.items);
      let maxPrice = Math.max(...products.map((el) => el.price));
      this.setState({
        products,
        sortedProducts: products,
        loading: false,
        price: maxPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.pictures.map(
        (picture) => picture.fields.file.url
      );
      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  };

  sorting = (order, products) => {
    let { sortedProducts } = this.state;
    let tempProducts = [...sortedProducts];
    console.log("started sorting");
    switch (order) {
      case "low": {
        console.log(tempProducts.price);
        tempProducts = tempProducts.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
        return tempProducts;
      }
      case "high":
        return (tempProducts = tempProducts.sort((a, b) =>
          a.price > b.price
            ? 1
            : a.price === b.price
            ? a.price > b.price
              ? 1
              : -1
            : -1
        ));
      case "popular":
        return tempProducts.sort((a, b) => a.price - b.price);
      case "new":
        return tempProducts.sort((a, b) => a.price - b.price);
    }
    this.setState({ sortedProducts: tempProducts });
  };

  getAlsoBought = (num) => {
    let tempProducts = [...this.state.products];
    const products = tempProducts.filter((el) => el.alsoBought === num);
    return products;
  };
  getAlsoLiked = (num) => {
    let tempProducts = [...this.state.products];
    const products = tempProducts.filter((el) => el.alsoBought === num);
    return products;
  };

  getCategoryProducts = (slug) => {
    let tempProducts = [...this.state.products];
    console.log(slug, tempProducts);
    const products = tempProducts.filter(
      (el) => el.categories.indexOf(slug) !== -1
    );
    // this.setState({ sortedProducts: products });
    return products;
  };

  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((el) => el.slug === slug);
    return product;
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          getCategoryProducts: this.getCategoryProducts,
          sorting: this.sorting,
          getAlsoBought: this.getAlsoBought,
          getAlsoLiked: this.getAlsoLiked,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export function withConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <Consumer>{(value) => <Component {...props} context={value} />}</Consumer>
    );
  };
}

export { Provider, Consumer, Context };
