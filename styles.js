const React = require('react-native')
import {Image} from 'react-native';

const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  listview: {
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    padding: 16
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: Image.resizeMode.contain
  }
})

module.exports = styles
module.exports.constants = constants;