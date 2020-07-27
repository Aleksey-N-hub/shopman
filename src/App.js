import React from "react";
import "./App.css";
import Product from "./pages/product";
import Category from "./components/categoryContainer";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/products/:slug" component={Product} />
      <Route path="/categories/:slug" component={Category} />
    </>
  );
}

export default App;
