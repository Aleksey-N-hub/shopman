import React from "react";
import LoadingGif from "../assets/loading-gear.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>products data loading...</h4>
      <img src={LoadingGif} alt="loading" />
    </div>
  );
}
