import React from "react";
import "./App.css";
import Product from "./pages/product";
import Category from "./components/categoryContainer";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/products/:slug" component={Product} />
      <Route path="/clothing/:slug" component={Category} />
      <Route path="/profile" component={Profile} />
    </>
  );
}

export default App;
