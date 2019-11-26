import React from "react";
import { Text, View, StyleSheet } from "react-native";
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

export default class Signin extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" />,
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Text style={{ fontSize: 20, paddingTop: 10 }}>Signin Page</Text>
          </Header>
          <Content style={{ marginTop: 100, paddingRight: 20 }}>
            <Form style={{ marginLeft: 20 }}>
              <Input placeholder="Username" rounded />
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
                <Text onPress={() => this.props.navigation.navigate("Home")}>
                  {" "}
                  Signin{" "}
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
