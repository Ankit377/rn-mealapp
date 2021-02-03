import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import Colors from "../constants/color";
import useDispatch from "react-redux";
import * as authActions from "../store/actions/authAction";

export default function SignUp() {
  const dispatch = useDispatch();

  const SignupHandler = () => {
    dispatch(authActions.signup());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/jackfruit_logo.png")}
      />
      <StatusBar style="auto" />

      <Input
        placeholder="Email"
        onChange={(email) => setEmail(email)}
        required
      />

      <Input
        placeholder="Passowrd"
        onChange={(password) => setEmail(password)}
        password={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#8a2be2",
    marginLeft: 10,
  },
  loginText: {
    color: Colors.White,
  },
});
