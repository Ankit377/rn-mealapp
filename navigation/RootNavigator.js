import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../user/Login";
import SignUp from "../user/SignUp";

const RootNavigator = createStackNavigator({
  Login: Login,
  SignUp: SignUp,
});

export default createAppContainer(RootNavigator);
