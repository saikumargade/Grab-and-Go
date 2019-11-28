import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
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

export default class Signup extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Text style={{ fontSize: 20, paddingTop: 10 }}>Sign up Page</Text>
          </Header>
          <Content style={{ marginTop: 100, paddingRight: 20 }}>
            <Form style={{ marginLeft: 20 }}>
              <TextInput
                placeholder="Username"
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 25,
                  height: 45,
                  paddingLeft: 18
                }}
              />
              <TextInput
                placeholder="E-mail Id"
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 25,
                  height: 45,
                  paddingLeft: 18,
                  marginTop: 9
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
                    this.props.navigation.navigate("Signin");
                  }}
                >
                  Sign up
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
    marginTop: 24
  }
});
