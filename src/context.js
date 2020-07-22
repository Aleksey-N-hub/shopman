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
    alsoBought: 0,
    alsoLike: 0,
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
      this.setState({
        products,
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
