import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import Api from "../api/Api";

import axios from "axios";
import ProductGridTile from "../components/ProductGridTile";
import { useSelector } from "react-redux";
const FavoriteScreens = (props) => {
  //console.log(props.navigation.dangerouslyGetParent().getParam("product_Data"));

  const favData = useSelector((state) => state.products.favoriteProducts);

  console.log(favData, "favData");

  const renderGridItem = (itemData) => {
    //console.log(itemData);

    return (
      <ProductGridTile
        imgsource={itemData.item.image}
        title={itemData.item.name}
        price={itemData.item.status}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProductDetail",
            params: {
              productData: itemData.name,
            },
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item._id}
        data={favData}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoriteScreens;
