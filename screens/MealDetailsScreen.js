import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import axios from "axios";

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen </Text>
      <Button
        title="go Home"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailsScreen;
