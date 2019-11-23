import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        {/* <Button
          title="go to profile"
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        /> */}
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
