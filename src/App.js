import React from "react";
import "./App.css";
// import Featured from "./components/featured";
import Product from "./pages/product";
import Category from "./pages/category";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/products/:slug" component={Product} />
      <Route path="/categories/:slug" component={Category} />
    </>
  );
}

export default App;
