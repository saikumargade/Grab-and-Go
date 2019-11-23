import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text>
        {/* <Button
          title="go to profile"
          onPress={() => this.props.navigation.navigate("ProfilePage")}
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
