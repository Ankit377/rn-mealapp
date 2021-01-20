import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import axios from "axios";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/HeaderButton";
import Colors from "../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
const ProductDetailsScreen = (props) => {
  const productData = props.navigation.getParam("productData");

  //console.log(price);
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
  return {
    headerTitle: productTitle.name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add to favorite"
          icon="ios-star"
          color="white"
          onPress={() => {
            console.log("Added in Favorite");
          }}
        />
      </HeaderButtons>
      // as Ionicons not working this can be used
      //<TouchableOpacity>
      //   <EvilIcons
      //     name="star"
      //     size={24}
      //     color={Colors.Third}
      //     onPress={() => {
      //       console.log("Added in Favorite");
      //     }}
      //   />
      // </TouchableOpacity>
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
