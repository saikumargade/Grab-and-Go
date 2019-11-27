import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Icon } from "native-base";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Button
} from "native-base";
import { Input } from "galio-framework";
import { logaction } from "../actions/LogAction";
import { connect } from "react-redux";

class Signin extends React.Component {
  state = {
    user: undefined
  };
  handleName = text => {
    this.setState({ user: text });
  };
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" />,
    headerShown: false
  };
  render() {
    const { user } = this.props;
    console.log("&&&&&&&&&&&&&", user)
    // if (user) {
    //   this.props.navigation.navigate("Home")
    // }
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Text style={{ fontSize: 20, paddingTop: 10 }}>Signin Page</Text>
          </Header>
          <Content style={{ marginTop: 100, paddingRight: 20 }}>
            <Form style={{ marginLeft: 20 }}>
              {/* <Input placeholder="Username" rounded onPress={this.handleName} /> */}
              <TextInput
                value={undefined}
                placeholder="Username"
                onChangeText={text => this.handleName(text)}
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 25,
                  height: 45,
                  paddingLeft: 18
                }}
              />
              <Input placeholder="Password" password viewPass rounded />
              <Button
                info
                style={{
                  marginTop: 30,
                  width: 100,
                  marginLeft: 10,
                  paddingLeft: 28
                }}
              >
                <Text
                  onPress={() => {
                    console.log("USer", this.state.user)
                    this.props.logaction(this.state.user);
                    this.props.navigation.navigate("Home");
                    // this.setState({ user: '' })
                  }}
                >
                  Signin
                </Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 25
  }
});
function msp(state) {
  return {
    user: state.user
  }
}
// export default Signin;
export default connect(msp, { logaction })(Signin);
