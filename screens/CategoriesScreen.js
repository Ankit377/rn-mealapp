import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import axios from "axios";
import Api from "../api/Api";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const [prodCat, setprodCat] = useState([]);
  //console.log(props);
  const [err, setErr] = useState([]);

  useEffect(() => {
    axios({
      method: "post",

      url: `${Api}` + "/get-categories",
    })
      .then((res) => {
        //console.log(res.data.data);
        return setprodCat(res.data.data);
      })
      .catch((error) => {
        //console.log(error);
        return setErr(error);
      });
  }, [1]);

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
    <View>
      <FlatList
        keyExtractor={(item) => item._id}
        data={prodCat}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Aarchi Enterprises",
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
