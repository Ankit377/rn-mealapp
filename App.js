import React, { useState, useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import MealsNavigatior from "./navigation/MealsNavigatior";
import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./store/reducers/products";
import { Provider, useDispatch } from "react-redux";
import ReduxThunk from "redux-thunk";
import { AuthContext } from "./context/Context";
import RootNavigator from "./navigation/RootNavigator";
import { fetchProduct, getProducts } from "./store/actions/productsAction";
enableScreens();

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
store.subscribe(() => {
  console.log(store.getState());
});
//store.dispatch(fetchProduct());
//console.log(store.dispatch(fetchProduct()));

//const dispatch = useDispatch();

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  /* const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null); */
  /* 
  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  loginReducer = () => {};

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken("logged");
        setIsLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      signUp: () => {
        setUserToken("logged");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []); */

  if (!FontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  /*   if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } */

  return (
    <Provider store={store}>
      <MealsNavigatior />
    </Provider>
    // <AuthContext.Provider value={authContext}>
    //   {userToken !== null ? (

    //   ) : (
    //     <RootNavigator />
    //   )}
    // </AuthContext.Provider>
  );
}

// Code by Ankit Paliwal
