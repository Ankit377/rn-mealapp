import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import SubCategoryScreen from "../screens/SubCategoryScreen";
import ProductList from "../screens/ProductList";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Colors from "../constants/color";

const MealsNavigator = createStackNavigator(
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.Primary,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(MealsNavigator);
