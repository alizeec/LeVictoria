const React = require('react-native')
import { Image } from 'react-native';
const { StyleSheet } = React

var styles = StyleSheet.create({
    container_home: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingTop: 20,
        alignItems: 'center',
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 40
    },
    scrollView: {
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
    container_logo: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: '#b71540',
        borderBottomWidth: 1,
        paddingBottom: 20,
        alignSelf: 'stretch',
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: Image.resizeMode.contain,
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        alignSelf: 'center'
    },
    category: {
        alignSelf: 'stretch',
        height: 150,
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,
    },
    category_image: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: Image.resizeMode.cover,
    },
    category_color: {
        flex: 1,
        position: 'absolute',
        width: 200,
        height: '100%',
        borderBottomWidth: 150,
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderStyle: 'solid'
    },
    category_color_lunch: {
        borderBottomColor: 'rgba(183, 21, 64, 0.8)',
        borderLeftColor: 'rgba(183, 21, 64, 0.8)',
    },
    category_color_dinner: {
        borderBottomColor: 'rgba(246, 185, 59, 0.8)',
        borderLeftColor: 'rgba(246, 185, 59, 0.8)',
    },
    category_color_brunch: {
        borderBottomColor: 'rgba(120, 224, 143, 0.8)',
        borderLeftColor: 'rgba(120, 224, 143, 0.8)',
    },
    category_color_drink: {
        borderBottomColor: 'rgba(130, 204, 221,0.8)',
        borderLeftColor: 'rgba(130, 204, 221,0.8)',
    },
    category_text_wrapper: {
        alignSelf: 'stretch',
        position: 'absolute',
        width: 150,
        bottom: 0,
        left: 10,
        marginBottom: 20,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    white_divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'white'
    },
    category_text_title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 10,
        fontSize: 20,
    },
    category_text_subtitle: {
        backgroundColor: 'transparent',
        color: 'white',
        paddingVertical: 10,
    }
})

module.exports = styles