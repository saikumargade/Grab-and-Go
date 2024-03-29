import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
import { connect } from "react-redux";
import { Container, Header, Content, Form, Item, Label } from "native-base";
import stores from "../components/FakeData";

class Cart extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="cart" />,
    headerShown: false
  };
  render() {
    // console.log(this.props.state);
    const { CartReducer } = this.props.state;
    console.log("storeid", CartReducer.cart);
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Text style={{ fontSize: 20, paddingTop: 10, color: "white" }}>
              Cart
            </Text>
          </Header>
          <Content style={{ marginTop: 50, paddingRight: 20 }}>
            <View>
              <View style={{ marginLeft: 30, marginBottom: 30 }}>
                <Text>
                  {CartReducer.cart.length ? (
                    <Text>
                      You can collect your order in{" "}
                      {stores[CartReducer.cart[0].storeid].picktime} minutes
                      from {stores[CartReducer.cart[0].storeid].Location.house},
                      {stores[CartReducer.cart[0].storeid].Location.street},
                      {stores[CartReducer.cart[0].storeid].Location.city}.
                    </Text>
                  ) : (
                    " "
                  )}
                </Text>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 120 }}>
                {CartReducer.cart.length ? (
                  CartReducer.cart.map((row, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        marginLeft: -90,
                        marginVertical: 10,
                        borderColor: "white",
                        borderBottomColor: "black",
                        borderWidth: 0.4
                      }}
                    >
                      <View style={{ flexDirection: "column" }}>
                        <Text>{row.item.name}</Text>
                        <Text style={{ fontSize: 11, color: "gray" }}>
                          Price:Rs.{row.item.price}/-
                        </Text>
                      </View>
                      <Text style={{ marginLeft: 60 }}>
                        Qty:{row.item.count}
                      </Text>
                      <Text style={{ marginLeft: 60 }}>
                        Rs.{row.item.price * row.item.count}/-
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text>Your Cart is empty</Text>
                )}
                <View>
                  {CartReducer.cart.length ? (
                    <Button
                      info
                      style={{
                        marginTop: 20,
                        width: 100,
                        marginLeft: 10,
                        paddingLeft: 20
                      }}
                    >
                      <Text>Checkout</Text>
                    </Button>
                  ) : null}
                </View>
              </View>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}
const msp = state => {
  // console.log("Cart", state)
  return {
    // cart: state.cart
    state
  };
};
export default connect(msp)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    marginTop: 24,
    justifyContent: "center"
  }
});
