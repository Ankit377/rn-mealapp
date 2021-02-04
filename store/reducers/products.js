import React from "react";

import axios from "axios";
import Api from "../../api/Api";
import {
  fetchProduct,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  TOGGLE_FAVORITE,
} from "../actions/productsAction";
import { useDispatch } from "react-redux";

let initialStateData = {
  Products: [],
  filteredProducts: [],
  favoriteProducts: [],
};

const productsReducer = (state = initialStateData, action) => {
  //console.log(`${action.productsId}` + " action.productsId");
  switch (action.type) {
    case "PRODUCT_REQ":
      return {
        Products: [],
        filteredProducts: [],
        favoriteProducts: [],
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        Products: action.payload,

        /* axios(`${Api}/get-all-products`).then(
          (res) =>
            //console.log(res.data.data)
            res.data.data
        ), */
      };
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteProducts.findIndex(
        (product) => product._id === action.productsId
      );
      console.log(`${existingIndex}`, " existing Index");

      //console.log(typeof favoriteProducts);

      if (existingIndex >= 0) {
        const updatedFavProducts = [...state.favoriteProducts];
        updatedFavProducts.splice(existingIndex, 1);
        return {
          ...state,
          favoriteProducts: updatedFavProducts,
        };
      } else {
        const product = state.Products.find(
          (product) => product._id === action.productsId
        );
        console.log(`${product.name}` + " product F");
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.concat(product),
        };
      }

    default:
      return state;
  }
};
console.log(initialStateData.favoriteProducts);

export default productsReducer;
