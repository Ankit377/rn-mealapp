import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import SubCategoryScreen from "../screens/SubCategoryScreen";
import ProductList from "../screens/ProductList";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Colors from "../constants/color";
import FavoriteScreens from "../screens/FavoriteScreens";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreens from "../screens/FilterScreens";

const defaulutStackNavigator = {
    headerStyle: {
      backgroundColor: Colors.Primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen,
      },
      SubCategory: {
        screen: SubCategoryScreen,
      },
      ProuductList: ProductList,
      ProductDetail: ProductDetailsScreen,
    },
    {
      initialRouteName: "Categories",
      mode: "model",
      defaultNavigationOptions: defaulutStackNavigator,
    }
  );
//below navigator for favorite screen
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreens,
    ProductDetail: ProductDetailsScreen,
  },
  {
    defaultNavigationOptions: defaulutStackNavigator,
  }
);
const ProductFavTabNavigator = createBottomTabNavigator(
  {
    Categories: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="appstore1" size={20} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator, //to have navigation on favorite screen..if want to show only favorite screen use FavoriteScreens
      navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="star-circle"
              size={20}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.Third,
      labelStyle: {
        fontSize: 15,
      },

      tabStyle: {
        // borderWidth: 0.2,
        // borderRadius: 15,
        paddingVertical: 5,
      },
    },
  }
);
const FiltersNavigator = createStackNavigator({
  Filters: FilterScreens,
});
const MainNavigator = createDrawerNavigator({
  CategoryHome: ProductFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(ProductFavTabNavigator);
