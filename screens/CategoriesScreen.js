import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import axios from "axios";
import Api from "../api/Api";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/actions/productsAction";
// import { productsReducer } from "../store/reducers/products";

// console.log(productsReducer);

const CategoriesScreen = (props) => {
  const [prodCat, setprodCat] = useState([]);
  //console.log(props);
  const [err, setErr] = useState([]);

  useEffect(() => {
    axios({
      method: "post",

      url: `${Api}/get-categories`,
    })
      .then((res) => {
        // console.log(res.data.data);
        return setprodCat(res.data.data);
      })
      .catch((error) => {
        //console.log(error);
        return setErr(error);
      });
  }, []);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    axios(`${Api}/get-all-products`)
      .then((res) => {
        setPro(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();
  dispatch(getProducts(pro));
  const renderGridItem = (itemData) => {
    // console.log(itemData.item.separators);
    return (
      <CategoryGridTile
        title={itemData.item.name}
        imgsource={itemData.item.image}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "SubCategory",
            params: {
              categoryId: itemData.item._id,
              category_name: itemData.item.name,
            },
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item._id}
      data={prodCat}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  //console.log(navData);
  return {
    headerTitle: "Aarchi Enterprises",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
