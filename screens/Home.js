import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Container, Button, Item, Input, Icon } from "native-base";
import StoreDisp from "../components/StoreDisp";
import stores from "../components/FakeData";
import { connect } from "react-redux";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

class Home extends React.Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" />,
    headerShown: false
  };
  render() {
    const { user } = this.props;
    // console.log("^^^^^^^^^^^^^^^^^6", user)
    if (!user) {
      this.props.navigation.navigate("Signin");
    }
    // if (true) {
    //   this.props.navigation.navigate("Signin");
    // }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.topLocation}>
          <View>
            <Icon
              name="navigate"
              style={{
                fontSize: 25,
                color: "green",
                marginLeft: 5,
                marginTop: 5
              }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 10, color: "gray" }}>
              Selected Location
            </Text>
            <Text style={{ fontWeight: "200" }}>Gachibowli,Hyderabad</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>Home screen</Text> */}
        {/* <Container>
          <Item>
            <Input placeholder="Search" />
            <Icon name="search" />
          </Item>
        </Container> */}
        {/* <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity> */}

        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
          }}
          getDefaultValue={() => ""}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "YOUR API KEY",
            language: "en", // language of the results
            types: "(cities)" // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              width: "100%"
            },
            description: {
              fontWeight: "bold"
            },
            predefinedPlacesDescription: {
              color: "#1faadb"
            }
          }}
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: "distance",
            types: "food"
          }}
          filterReverseGeocodingByTypes={[
            "locality",
            "administrative_area_level_3"
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          predefinedPlaces={[homePlace, workPlace]}
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
          // renderRightButton={() => <Text>Custom text after the input</Text>}
        />
        <ScrollView style={{ marginTop: 55, marginBottom: 10 }}>
          {stores.map((s, i) => {
            return (
              <StoreDisp
                key={i}
                id={i}
                name={s.Name}
                type={s.category}
                street={s.Location.street}
                city={s.Location.city}
                time={s.picktime}
                rating={s.rating}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Home);
// export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    height: 100,
    justifyContent: "center",
    marginTop: 25,
    paddingHorizontal: 10
  },
  topLocation: {
    flexDirection: "row",
    marginBottom: 5
  }
});
