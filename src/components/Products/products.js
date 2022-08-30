/** File that is used to fetch all products from the store and display in the ui */

import React, { useEffect } from "react";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../redux/Action/productAction";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Productsss :: here", products);

  return (
    <>
      <div className="card-containers">
        {products.map((product) => (
          <div className="card-item">
            <Link to={`/productdetail/${product.id}`}>
              <div className="card-inner">
                <div className="card-top" key={product.id}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-bottom">
                  <div className="card-info">
                    <h4>{product.title.substring(0, 12)}</h4>
                    <p>${product.price}</p>
                  </div>
                  <NavLink
                    to={`/productdetail/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    ShopNW
                  </NavLink>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
