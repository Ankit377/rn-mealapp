import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Api from "../api/Api";

import axios from "axios";
import ProductGridTile from "../components/ProductGridTile";
import { useSelector } from "react-redux";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  //console.log(props.navigation.getParam("subcategoryId"));
  const subcatId = props.navigation.getParam("subcategoryId");

  const availableProducts = useSelector((state) => state.products.Products);
  //console.log(availableProducts);

  const displayProducts = availableProducts.filter(
    (productsAll) => productsAll.sub_category_id == subcatId
  );
  //console.log(displayProducts);

  /*  useEffect(() => {
    axios({
      method: "post",

      url: `${Api}` + "/get-products-by-subcategory-id",
      data: {
        subcategory_id: subcatId,
      },
    }).then((res) => {
      //console.log(res.data.data);
      return setProducts(res.data.data);
    });

    // .catch((error) => {
    //   //console.log(error);
    //   return setErr(error);
    // });
  }, []); */
  const renderGridItem = (itemData) => {
    // console.log(itemData);

    return (
      <ProductGridTile
        imgsource={itemData.item.image}
        title={itemData.item.name}
        price={itemData.item.status}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProductDetail",
            params: {
              productData: itemData.item,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item._id}
      data={displayProducts}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
ProductList.navigationOptions = (navigationData) => {
  //console.log(navigationData.navigation.state.params.category_name);
  const currentCat = navigationData.navigation.getParam("subcategory_name");
  return {
    headerTitle: currentCat,
  };
};

const styles = StyleSheet.create({});

export default ProductList;
