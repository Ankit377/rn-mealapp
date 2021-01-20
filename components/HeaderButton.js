import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/color";

const CustomHeaderButton = (props) => {
  console.log(props);
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={8}
      color={Colors.Third}
    >
      <EvilIcons name="star" size={24} color={Colors.Third} />
    </HeaderButton>
  );
};
// IconComponent={Ionicons}
export default CustomHeaderButton;
