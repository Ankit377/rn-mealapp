import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet, View } from "react-native";

const ProductGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridView} onPress={props.onSelect}>
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: props.imgsource }}
        />
        <View>
          <Text style={styles.listItem}>{props.title}</Text>
          <Text>₹ {props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    height: 150,
    margin: 3,
  },
  container: {
    flex: 1,
    borderWidth: 0.2,
    borderColor: "#A9A9A9",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
  },
  listItem: {
    color: "green",
    // padding: 2,
  },
});
export default ProductGridTile;
