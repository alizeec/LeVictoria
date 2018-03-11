const React = require('react-native')
import { Image } from 'react-native';
const { StyleSheet } = React

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    scrollView: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        flex: 1
    },
    image: {
        alignSelf: 'stretch',
        height: 250,
    },
    top_info_wrapper: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 16, 
        paddingLeft: 10,
        paddingRight: 10
    },
    main_info_wrapper: {
        flex: 3,
        flexDirection: 'column'
    },
    main_info_text: {
        fontWeight: 'bold',
    },
    subway_wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    description: {
        alignSelf: 'stretch',
        marginTop: 16, 
        marginLeft: 10,
        marginRight: 10
    }
})

module.exports = styles