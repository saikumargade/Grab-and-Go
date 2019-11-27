import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
import Signin from "./screens/Signin";
import StoreList from "./screens/StoreList";
import StoreDisp from "./components/StoreDisp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import isLogged from "./reducers/isLogged";
import { Icon } from "native-base";
const store = createStore(isLogged);
const HomeTab = createStackNavigator(
  {
    Home: Home,
    Cart: Cart,
    Profile: Profile,
    StoreDisp: StoreDisp,
    StoreList: StoreList
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" />
    }
  }
);
const TabScreens = createBottomTabNavigator(
  {
    Home: HomeTab,
    Cart: Cart,
    Profile: Profile,
    Signin: Signin
  }
);
const Tabs = createAppContainer(TabScreens);

export default function App() {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
