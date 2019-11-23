import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class Cart extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="cart" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
