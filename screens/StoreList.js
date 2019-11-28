import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "native-base";
import stores from '../components/FakeData';
import pic from '../assets/icon.png';
import ItemDisp from './ItemDisp'

class StoreList extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    const id = JSON.stringify(this.props.navigation.getParam("id", "NO-ID").id)
    return (
      <View>
        <View style={styles.container}>
          <Image source={pic} style={styles.images} />
          <View style={styles.details}>
            <Text style={{ fontWeight: "400", fontSize: 18 }}>
              {stores[id].Name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>
              {stores[id].category}
            </Text>
            <Text style={{ color: "rgb(40, 77, 107)", marginTop: 5 }}>
              Rating:{stores[id].rating}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 15, color: "black", marginTop: 110, marginLeft: 22 }}>
            You have to pick up the order from House {stores[id].Location.house},{stores[id].Location.street},{stores[id].Location.city}
          </Text>
        </View>
        <ScrollView onScroll={() => console.log('scrolling')} style={{ marginTop: 20, height: 320 }}>
          {stores[id].items.map((i, c) => { return (<ItemDisp key={c} storeid={id} itemid={c} item={i} name={i.name} count={i.count} price={i.price} />) })}
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(StoreList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    marginTop: 45,
    marginHorizontal: 10,
    height: 100
    // alignItems: "center",
    // justifyContent: "center"
  },
  images: {
    marginLeft: 10,
    width: 100,
    height: 100
  },
  details: {
    marginLeft: 10,
    marginTop: 7
  }
});
