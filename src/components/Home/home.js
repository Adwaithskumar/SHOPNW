/** File that shows the home page functionalities */

import React from "react";
import cover from "../../images/cover.jpg";
import Products from "../Products/products";
import "./home.scss";

const Home = () => {
  return (
    <div className="bg">
      <div className="card text-white bg-dark border-0">
        <img src={cover} className="card-img" alt="cover" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">SHOPNW</h5>
            <p className="card-text lead fs-2">EVERYTHING IN ONE SITE</p>
          </div>
        </div>
      </div>

      <div className="products-wrapper">
        <div className="products-list">
          <h2>All Products</h2>
          <div className="products-container">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
