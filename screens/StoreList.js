import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class Cart extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Store List</Text>
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
