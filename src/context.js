import React, { Component, createContext, useContext, useReducer } from "react";
import Client from "./Contentful";
// import New from "./components/new";
import Axios from "axios";
import { auth } from "./components/firebase";

const Context = createContext();

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
    likes: [],
    cart: [],
    user: null,
  };

  getData = async () => {
    let likes = [],
      cart = [];
    if (localStorage.getItem("likes")) {
      likes = [...JSON.parse(localStorage.getItem("likes"))];
    }
    if (localStorage.getItem("cart")) {
      cart = [...JSON.parse(localStorage.getItem("cart"))];
    }

    try {
      let response = await Client.getEntries({
        content_type: "shopman",
      });
      console.log(response);

      let products = this.formatData(response.items);
      let maxPrice = Math.max(...products.map((el) => el.price));
      let size = [];
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
        cart,
        likes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  setUser = () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
    return unsubscribe();
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

  getAlsoBought = (num, slug) => {
    let tempProducts = [...this.state.products];
    const products = tempProducts.filter(
      (el) => el.alsoBought === num && el.slug !== slug
    );
    return products;
  };
  getAlsoLiked = (num, slug) => {
    let tempProducts = [...this.state.products];
    const products = tempProducts.filter(
      (el) => el.alsoLike === num && el.slug !== slug
    );
    return products;
  };

  getCategoryProducts = (slug) => {
    let tempProducts = [...this.state.products];
    console.log(slug, tempProducts);
    const products = tempProducts.filter(
      (el) => el.categories.indexOf(slug) !== -1
    );
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

  likeProductHandler = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((el) => el.slug === slug);
    let likes = [...this.state.likes];
    let index = likes?.findIndex((el) => el.slug === slug);
    //product already liked - remove
    if (index >= 0) {
      likes.splice(index, 1);
    } else {
      //product not liked yet - add
      likes.push(product);
    }
    this.setState({ likes });
    localStorage.setItem("likes", JSON.stringify(likes));
    console.log(likes);
  };

  addToCartHandler = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((el) => el.slug === slug);
    let cart = [...this.state.cart];
    cart.push(product);
    console.log(cart);
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  removeFromCartHandler = (id) => {
    let cart = [...this.state.cart];
    cart.splice(id, 1);

    console.log(cart);
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
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
          setUser: this.setUser,
          likeProductHandler: this.likeProductHandler,
          addToCartHandler: this.addToCartHandler,
          removeFromCartHandler: this.removeFromCartHandler,
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

//   authStart = () => {
//   this.setState({ error: null, loading: true });
// };

// continueSigning = () => {
//   this.setState({ signing: true });
// };

// cancelSigning = () => {
//   this.setState({ signing: false });
// };

// authSuccess = (token, userId) => {
//   this.setState({
//     token,
//     userId,
//     error: null,
//     loading: false,
//     signing: false,
//   });
// };

// authFail = (error) => {
//   this.setState({ error, loading: false });
// };

// logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("expirationDate");
//   localStorage.removeItem("userId");
//   this.setState({ token: null, userId: null });
// };

// checkAuthTimeout = (expirationTime) => {
//   setTimeout(() => {
//     this.logout();
//   }, expirationTime * 1000);
// };

// auth = (email, password, isSignup) => {
//   this.authStart();
//   const authData = {
//     email: email,
//     password: password,
//     returnSecureToken: true,
//   };
//   let url =
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMSj3Rlu_3BIMXlNDfTGxCkdujfkyAoa8";
//   if (!isSignup) {
//     url =
//       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMSj3Rlu_3BIMXlNDfTGxCkdujfkyAoa8";
//   }
//   Axios.post(url, authData)
//     .then((response) => {
//       const expirationDate = new Date(
//         new Date().getTime() + response.data.expiresIn * 1000
//       );
//       localStorage.setItem("token", response.data.idToken);
//       localStorage.setItem("expirationDate", expirationDate);
//       localStorage.setItem("userId", response.data.localId);
//       this.authSuccess(response.data.idToken, response.data.localId);
//       this.checkAuthTimeout(response.data.expiresIn);
//     })
//     .catch((err) => {
//       this.authFail(err.response.data.error);
//     });
// };

// authCheckState = () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     this.logout();
//   } else {
//     const expirationDate = new Date(localStorage.getItem("expirationDate"));
//     if (expirationDate <= new Date()) {
//       this.logout();
//     } else {
//       const userId = localStorage.getItem("userId");
//       this.authSuccess(token, userId);
//       this.checkAuthTimeout(
//         (expirationDate.getTime() - new Date().getTime()) / 1000
//       );
//     }
//   }
// };
