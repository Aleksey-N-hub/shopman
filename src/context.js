import React, { Component } from "react";
import Client from "./Contentful";
// import New from "./components/new";

const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    maxPrice: 0,
    minPrice: 0,
    size: "",
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
      let size = [];
      console.log(products);
      products.forEach((el) => {
        el.size.forEach((e) => {
          size.push(e);
        });
      });
      size = [...new Set(size)];
      this.setState({
        products,
        sortedProducts: products,
        loading: false,
        maxPrice,
        size,
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

  sorting = (event) => {
    let { products } = this.state;
    let tempProducts = [...products];
    console.log("started sorting");
    if (event.target.value === "low") {
      tempProducts = tempProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (event.target.value === "high") {
      tempProducts = tempProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (event.target.value === "popular") {
      tempProducts = tempProducts.sort((a, b) =>
        a.reviews < b.reviews ? 1 : -1
      );
    } else if (event.target.value === "sale") {
      tempProducts = tempProducts.sort((a, b) =>
        a.discount < b.discount ? 1 : -1
      );
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

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = event.target.name;
    console.log(target);
    console.log(value);
    console.log(name);
    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let {
      products,
      price,
      size,
      // discount,
      // colour,
      // material,
      // reviews,
    } = this.state;
    // all the rooms
    let tempProducts = [...products];
    //transform value
    price = parseInt(price);

    //filter by size
    if (size !== "all") {
      // tempProducts = tempProducts.filter((product) => product.size.filter(el => el.) === size);
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);
    // //filter by capacity
    // if (capacity !== 1) {
    //   tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    // }
    // //filter by price
    // tempRooms = tempRooms.filter((room) => room.price <= price);

    // //filter by size
    // tempRooms = tempRooms.filter(
    //   (room) => room.size >= minSize && room.size <= maxSize
    // );

    // //filter by breakfast
    // if (breakfast) {
    //   tempRooms = tempRooms.filter((room) => room.breakfast === true);
    // }

    // //filter by pets
    // if (pets) {
    //   tempRooms = tempRooms.filter((room) => room.pets === true);
    // }

    //change state
    this.setState({ sortedProducts: tempProducts });
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
          handleChange: this.handleChange,
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
