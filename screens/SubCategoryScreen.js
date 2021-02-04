import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Api from "../api/Api";
import { NavigationActions } from "react-navigation";

import axios from "axios";
import CategoryGridTile from "../components/CategoryGridTile";
import { useDispatch } from "react-redux";
import { fetchProduct, getProducts } from "../store/actions/productsAction";

const SubCategoryScreen = (props) => {
  const [subCat, setsubCat] = useState([]);
  const [pro, setPro] = useState([]);
  //console.log(props.navigation.getParam("categoryId"));
  const catId = props.navigation.getParam("categoryId");

  useEffect(() => {
    axios({
      method: "post",

      url: `${Api}` + "/get-subcategories-by-category-id",
      data: {
        category_id: catId,
      },
    }).then((res) => {
      //console.log(res.data);
      return setsubCat(res.data.data);
    });
    // .catch((error) => {
    //   //console.log(error);
    //   return setErr(error);
    // });
  }, [catId]);
  useEffect(() => {
    //props.navigation not used as it is now  a navigation variable
    props.navigation.setParams({ subCat });
  }, [subCat]);
  useEffect(() => {
    axios(`${Api}/get-all-products`)
      .then((res) => {
        setPro(res.data.data);
      })
      .catch((err) => console.log(err));
  });
  const dispatch = useDispatch();

  const renderGridItem = (itemData) => {
    // console.log(itemData.item.separators);

    return (
      <CategoryGridTile
        imgsource={itemData.item.image}
        title={itemData.item.name}
        onSelect={() => {
          // dispatch(getProducts(pro));
          props.navigation.navigate({
            routeName: "ProuductList",
            params: {
              subcategoryId: itemData.item._id,
              subcategory_name: itemData.item.name,
            },
          });

          // console.log("2nd function work"); it is used to send data into another component in same navigation router
          // const setParamsAction = NavigationActions.setParams({
          //   params: { subId: itemData },
          //   key: "products",
          // });
          // props.navigation.dispatch(setParamsAction);
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item._id}
      data={subCat}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
SubCategoryScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData.navigation.state.params.category_name);
  // const currentCat = navigationData.navigation.state.params.category_name;
  const currentCat = navigationData.navigation.getParam("category_name");
  return {
    headerTitle: currentCat,
  };
};

const styles = StyleSheet.create({});

export default SubCategoryScreen;
