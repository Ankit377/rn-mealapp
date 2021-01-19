import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  FlatList,
} from "react-native";
import Api from "../api/Api";

import axios from "axios";
import CategoryGridTile from "../components/CategoryGridTile";

const SubCategoryScreen = (props) => {
  const [subCat, setsubCat] = useState([]);
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
  }, [1]);
  const renderGridItem = (itemData) => {
    // console.log(itemData.item.separators);

    return (
      <CategoryGridTile
        imgsource={itemData.item.image}
        title={itemData.item.name}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProuductList",
            params: {
              subcategoryId: itemData.item._id,
              subcategory_name: itemData.item.name,
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
        data={subCat}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
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
