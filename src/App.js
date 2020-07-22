import React from "react";
import "./App.css";
// import Featured from "./components/featured";
import Product from "./pages/product";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/:slug" component={Product} />
    </>
  );
}

export default App;
