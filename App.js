import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";

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

const TabScreens = createBottomTabNavigator(
  {
    Home: Home,
    Cart: Cart,
    Profile: Profile
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(TabScreens);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
