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
import Colors from "../constants/color";
import CategoryGridTile from "../components/CategoryGridTile";

let width = Dimensions.get("window").width; //full width

const CategoryMealsScreen = (props) => {
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
  }, []);
  const renderGridItem = (itemData) => {
    // console.log(itemData.item.separators);

    return (
      <CategoryGridTile
        imgsource={itemData.item.image}
        title={itemData.item.name}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item._id,
              category_name: itemData.item.name,
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
CategoryMealsScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData.navigation.state.params.category_name);
  const currentCat = navigationData.navigation.state.params.category_name;
  return {
    headerTitle: currentCat,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
