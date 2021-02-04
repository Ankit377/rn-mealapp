import React, { useState, useEffect } from "react";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_REQ = "PRODUCT_REQ";

import axios from "axios";
import { useDispatch } from "react-redux";
import Api from "../../api/Api";

export const productReq = () => {
  return {
    type: PRODUCT_REQ,
    payload: "product has been request",
  };
};

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    productsId: id,
  };
};

export const getProducts = (allProducts) => {
  return {
    type: GET_PRODUCTS,
    payload: allProducts,
  };
};
export const productsError = (error) => {
  return {
    type: PRODUCT_ERROR,
    payload: error,
  };
};

/* export const fetchProduct = () => {
  return async function () {
    await axios(`${Api}/get-all-products`)
      .then((res) => {
        getProducts(res.data.data);
      })
      .catch((err) => console.log(err));
  };
};
 */
