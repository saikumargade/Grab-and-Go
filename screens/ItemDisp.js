import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base'

class ItemDisp extends React.Component {
    state = {
        count: 0
    }
    handleAdd = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrease = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        const { count } = this.state
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', top: 10, bottom: 10 }}>
                    <Text>{this.props.name}</Text>
                    <Text style={{ fontSize: 11, color: 'gray' }}>Price:Rs.{this.props.price}/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 120, top: 18 }}>
                    {count ? <Text onPress={this.handleDecrease} style={{ marginHorizontal: 20 }}>-</Text> : null}
                    <Text onPress={this.handleAdd}>{count ? count : 'Add'}</Text>
                    {count ? <Text onPress={this.handleAdd} style={{ marginHorizontal: 20 }}>+</Text> : null}
                </View>
            </View>
        )
    }
}

export default ItemDisp;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        //   alignItems: "center",
        // justifyContent: "center",
        marginHorizontal: 30,
        marginTop: 10,
        borderColor: 'white',
        borderBottomColor: 'black',
        borderWidth: 0.4,
        // borderRadius: 5,
        height: 70
    }
});