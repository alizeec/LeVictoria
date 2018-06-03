import React, {Component} from 'react';
import ReactNative from 'react-native';

const {View, Text, Image, TouchableHighlight} = ReactNative;
import Touchable from 'react-native-platform-touchable';
const styles = require('../components/List/styleList.js')


class ListItem extends Component {

    render() {
        return (
            <Touchable onPress={this.props.onPress}>
                <View style={styles.place}>
                    <Image style={styles.image}
                           source={{uri: this.props.item.image}}
                    />
                    <View style={styles.text_wrapper}>
                        <Text style={[styles.text, styles.text_title]}>{this.props.item.name}</Text>
                        <Text style={[styles.text,styles.text_style]}>{this.props.item.style}</Text>
                    </View>
                </View>
            </Touchable>
        );
    }
}

module.exports = ListItem;