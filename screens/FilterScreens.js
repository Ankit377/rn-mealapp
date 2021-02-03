import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";
import Colors from "../constants/color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={props.state ? styles.listItem : styles.listItemfalse}>
        {props.filterName}
      </Text>
      <Switch value={props.state} onValueChange={props.switchChange} />
    </View>
  );
};

const FilterScreens = (props) => {
  const { navigation } = props; //object destructuring, extrac navigation from props and saved into self navigation variable
  const [isFruits, setisFruits] = useState(false);
  const [isCleanItem, setisCleanItem] = useState(false);
  const [isDairy, setisDairy] = useState(false);

  const savedFilter = useCallback(() => {
    const appliedFilter = {
      fruits: isFruits,
      cleanItem: isCleanItem,
      dairy: isDairy,
    };
    console.log(appliedFilter);
  }, [isFruits, isCleanItem, isDairy]);

  useEffect(() => {
    //props.navigation not used as it is now  a navigation variable
    navigation.setParams({ save: savedFilter });
  }, [savedFilter]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters </Text>
      <FilterSwitch
        filterName="Fruits"
        state={isFruits}
        switchChange={(newValue) => setisFruits(newValue)}
      />
      <FilterSwitch
        filterName="Cleaning Items"
        state={isCleanItem}
        switchChange={(newValue) => setisCleanItem(newValue)}
      />
      <FilterSwitch
        filterName="Dairy"
        state={isDairy}
        switchChange={(newValue) => setisDairy(newValue)}
      />
    </View>
  );
};
FilterScreens.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Screen",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={
            navData.navigation.getParam("save") //("save") add () to run getParam funciton in function way
          }
        />
      </HeaderButtons>
    ),
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
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
    color: Colors.Primary,
    fontWeight: "bold",
  },
  listItem: {
    fontSize: 18,
    color: Colors.Primary,
  },
  listItemfalse: {
    fontSize: 18,
    color: "gray",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
});
export default FilterScreens;
