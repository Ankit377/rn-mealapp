import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import MealsNavigatior from "./navigation/MealsNavigatior";

enableScreens();
const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  if (!FontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <MealsNavigatior />;
}

// Code by Ankit Paliwal
