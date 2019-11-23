import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login screen</Text>
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
