const React = require('react-native')
import { Image } from 'react-native';
const { StyleSheet } = React

var styles = StyleSheet.create({
    container_list: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
    },
    place: {
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 200,
        position: 'relative',
        marginBottom: 3,
    },
    image: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: Image.resizeMode.cover,
    },
    text_wrapper: {
        flex: 1, 
        position: 'absolute', 
        width: "100%",
        bottom: 0,
        backgroundColor: 'rgba(47, 54, 64, 0.5)',
        flexDirection: 'column', 
        padding: 10
    },
    text: {
        color: 'white',
    },
    text_title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    text_style: {
        fontSize: 10
    }
})
module.exports = styles

