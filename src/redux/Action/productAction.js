/** This file will perform all actions and update the state*/

import { ActionTypes } from "../Constants/actionTypes";
import productApi from "../../api/productApi";

/** @function [<fetchProducts>]
 * This function is uesd to fetch data from the api and update the state
 */

export const fetchProducts = () => async (dispatch) => {
  const response = await productApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

/** @function [<fetchProductDetail>]
 * This function is used particular product details
 */

export const fetchProductDetail = (id) => async (dispatch) => {
  const response = await productApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

/** @function [<remove_selectedProduct>]
 * This function is used to remove the selected product details
 */

export const remove_selectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
