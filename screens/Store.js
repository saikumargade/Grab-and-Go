import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Store extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Store screen</Text>
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
