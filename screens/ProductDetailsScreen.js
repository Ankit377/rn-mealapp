import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import axios from "axios";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const productName = props.navigation.getParam("product_name");
  const image = props.navigation.getParam("image");
  const price = props.navigation.getParam("price");
  const description = props.navigation.getParam("description");
  console.log(price);
  return (
    <View style={styles.screen}>
      <Image style={{ width: "100%", height: 300 }} source={{ uri: image }} />
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.title}>
        ₹ {price.variants[0].price} / {price.variants[0].measurement_unit_name}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="go Home"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

ProductDetailsScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData);
  const productTitle = navigationData.navigation.getParam("product_name");
  return {
    headerTitle: productTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "green",
    fontSize: 22,
  },
  price: { color: "green", fontSize: 22 },
  description: {
    color: "gray",
    margin: 10,
    marginBottom: 100,
  },
});

export default ProductDetailsScreen;
