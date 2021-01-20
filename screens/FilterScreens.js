import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterScreens = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen </Text>
    </View>
  );
};
FilterScreens.navigationOptions = (navigation) => {
  return { headerTitle: " filter screen" };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FilterScreens;
