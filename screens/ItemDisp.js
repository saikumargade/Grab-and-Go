import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { cartaction } from '../actions/CartAction'

class ItemDisp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeid: props.storeid,
            itemid: props.itemid,
            item: props.item
        }
    }

    // componentDidMount = () => {
    //     this.setState({ storeid: this.props.storeid, itemid: this.props.itemid, item: this.props.item })
    //     console.log('item state', this.state)
    // }
    handleAdd = () => {
        const { item, storeid } = this.state;
        item.count++;
        this.props.cartaction({ item, storeid })
        this.setState({ item })
    }
    handleDecrease = () => {
        const { item, storeid } = this.state;
        item.count--;
        this.props.cartaction({ item, storeid })
        this.setState({ item })
    }
    render() {
        const { item } = this.state;
        // console.log("TTTTTTTTTTTTTTTTTT", item)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', top: 10, bottom: 10 }}>
                    <Text>{item.name}</Text>
                    <Text style={{ fontSize: 11, color: 'gray' }}>Price:Rs.{item.price}/-</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 120, top: 18 }}>
                    {item.count ? <Text onPress={this.handleDecrease} style={{ marginHorizontal: 20 }}>-</Text> : null}
                    <Text onPress={this.handleAdd}>{item.count ? item.count : 'Add'}</Text>
                    {item.count ? <Text onPress={this.handleAdd} style={{ marginHorizontal: 20 }}>+</Text> : null}
                </View>
            </View>
        )
    }
}

export default connect(null, { cartaction })(ItemDisp);

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