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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app</Text>
//     </View>
//   );
// }

// const AppStackNavigator = createStackNavigator(
//   {
//     HomeScreen: Home,
//     ProfileScreen: Profile
//   },
//   {
//     initialRouteName: "HomeScreen"
//   }
// );
const store = createStore(isLogged);
const HomeTab = createStackNavigator(
  {
    Home: Home,
    Cart: Cart,
    Profile: Profile,
    Signin: Signin,
    StoreDisp: StoreDisp,
    StoreList: StoreList
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" />
    },
    // initialRouteNa?me: true ? "Signin" : "Home"
  },
);
const CartTab = createStackNavigator(
  {
    Cart: Cart,
    Home: Home,
    Profile: Profile,
    Signin: Signin
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="cart" />
    }
  }
);
const ProfileTab = createStackNavigator(
  {
    Profile: Profile,
    Cart: Cart,
    Home: Home,
    Signin: Signin
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="person" />
    }
  }
);
const SigninTab = createStackNavigator(
  {
    Signin: Signin,
    Home: Home
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="person" />
    }
  }
);
const TabScreens = createBottomTabNavigator(
  {
    Home: HomeTab,
    Cart: CartTab,
    Profile: ProfileTab,
    Signin: SigninTab
  }
  // {
  //   initialRouteName: "Home"
  // }
);
const Tabs = createAppContainer(TabScreens);

export default function App() {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
}
// export default (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// export default createAppContainer(TabScreens);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
