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
            <Text style={{ fontWeight: "400", fontSize: 18 }}>
              {this.props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>
              {this.props.type}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>
              {this.props.street},{this.props.city}
            </Text>
            <Text style={{ color: "rgb(40, 77, 107)", marginTop: 5 }}>
              Rating:{this.props.rating}
            </Text>
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
  },
  images: {
    marginLeft: 10,
    width: 100,
    height: 100
  },
  details: {
    marginLeft: 10,
    marginTop: 10
  }
});

export default withNavigation(StoreDisp);
