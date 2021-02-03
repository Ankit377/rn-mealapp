import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/color";

const CustomHeaderButton = (props) => {
  //console.log(props);
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color={Colors.White}
    />
  );
};
// IconComponent={Ionicons}
export default CustomHeaderButton;
