import React from "react";
import "./App.css";
// import Featured from "./components/featured";
import Product from "./pages/product";
import Category from "./components/categoryContainer";
import { Route, Switch } from "react-router-dom";
import Images from "./pages/images";

function App() {
  return (
    <>
      <Route path="/products/:slug" component={Product} />
      <Route path="/categories/:slug" component={Category} />
      <Route path="/" exact component={Images} />
    </>
  );
}

export default App;
