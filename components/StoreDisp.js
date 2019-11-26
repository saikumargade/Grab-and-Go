import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import pic from "../assets/icon.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

class StoreDisp extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.navigate("StoreList")}
      >
        <View style={styles.container}>
          <Image source={pic} style={styles.images} />
          <View style={styles.details}>
            <Text>Store name</Text>
            <Text style={{ marginTop: 5 }}>Store description</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    //   alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "black",
    marginVertical: 5
    // shadowColor: "gray",
    // shadowOffset: {
    //   width: 10,
    //   height: 10
    // },
    // shadowRadius: 5
  },
  images: {
    marginLeft: 10,
    width: 100,
    height: 100
  },
  details: {
    marginLeft: 20,
    marginTop: 10
  }
});

export default withNavigation(StoreDisp);
