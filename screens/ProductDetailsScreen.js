import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { getProducts, toggleFavorite } from "../store/actions/productsAction";
import Api from "../api/Api";
const ProductDetailsScreen = (props) => {
  const [pro, setPro] = useState([]);

  const productData = props.navigation.getParam("productData");
  //console.log(productData._id);

  // const fullDescription = useSelector((state) => state.products.Products._55);

  // const productSelected = fullDescription.filter(
  //   (data) => data._id === productData._id
  // );
  // console.log(productSelected[0]._id);
  //console.log(fullDescription);
  console.log(productData._id);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    //dispatch(getProducts(pro));
    dispatch(toggleFavorite(productData._id));
  }, [dispatch]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);
  /* useEffect(() => {
    axios(`${Api}/get-all-products`)
      .then((res) => {
        setPro(res.data.data);
      })
      .catch((err) => console.log(err));
  }); */
  return (
    <View style={styles.screen}>
      <Image
        style={{ width: "100%", height: 300 }}
        source={{ uri: productData.image }}
      />
      <Text style={styles.title}>{productData.name}</Text>
      <Text style={styles.title}>
        ₹ {productData.variants[0].price} /
        {productData.variants[0].measurement_unit_name}
      </Text>
      <Text style={styles.description}>{productData.description}</Text>
      <Button
        title="Fav"
        onPress={() => {
          //console.log("Added in Favorite bottom");

          //dispatch(getProducts(pro));
          dispatch(toggleFavorite(productData._id));
          props.navigation.navigate({
            routeName: "Favorites",
            params: {
              product_Data: productData,
            },
          });
        }}
      />
    </View>
  );
};

ProductDetailsScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData);
  const productTitle = navigationData.navigation.getParam("productData");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: productTitle.name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="star" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    ),
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
