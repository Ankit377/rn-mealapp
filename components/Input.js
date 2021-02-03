import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/color";

export default function Input(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor="#fff"
        onChangeText={props.onChange}
        secureTextEntry={props.password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: Colors.Primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    /* marginLeft: 20, */
    justifyContent: "center",
    color: Colors.White,
  },
});
