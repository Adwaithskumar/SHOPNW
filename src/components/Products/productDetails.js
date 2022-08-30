/** File that is used to fetch a particular product from the store and display in the ui */


import React, { useEffect } from "react";
import "./productDetails.scss";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchProductDetail,
  remove_selectedProduct,
} from "../../redux/Action/productAction";
import useAddCart from "../../CustomHooks/useAddCart";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const [counter, addCart] = useAddCart(0);

  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetail(productId));
    return () => {
      dispatch(remove_selectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="product-section">
            <div className="section-left">
              <div className="product-title">{title}</div>
              <div className="display-6 fw-bold my-4">{category}</div>
              <div className="product-rating">
                <span>
                  Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star"></i>
                </span>
             
              </div>
              <h3 className="display-6 fw-bold my-4">${price}</h3>
                <p className="lead"> {description}</p>
                <button className="btn btn-outlibe-dark px-4 py-2" onClick={addCart}>
                  Add To Cart
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                  Go to Cart
                </NavLink>
                <h2>{counter}</h2>
            </div>
            <div className="section-right">
              <img src={image} alt={title} height="400px" />
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default ProductDetails;
