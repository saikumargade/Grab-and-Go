import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "native-base";

class StoreList extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Store List</Text>
        <Text>store id: {JSON.stringify(this.props.navigation.getParam("id"))}</Text>
      </View>
    );
  }
}

export default withNavigation(StoreList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
