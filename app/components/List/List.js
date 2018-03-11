import React from 'react';

import { View, Text, ListView, ScrollView } from 'react-native';
const Title = require('../Title');
const ListItem = require('../ListItem');
const ActionButton = require('../ActionButton');
const AddPlaceScreen = require('../AddPlace/AddPlace');
const SeePlaceScreen = require('../SeePlace/SeePlace')
const styles = require('./styleList.js')
import navigator from "../../navigation/navigator"
import firebase from "../../config/firebase"


class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
      title: "",
    });

    render() {
      // The screen's current route is passed in to `props.navigation.state`:
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
      const type = params ? params.type : null;
  
      return (
        <View style={styles.container_list}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}/>
          <ActionButton onPress={() => navigate('AddPlace', {type: type})} title="Add" />
        </View>
      );
    }
    getRef() {
      return firebase.database().ref();
    }

    listenForItems(itemsRef) {
      itemsRef.on('value', (snap) => {
  
        // get children as an array
        var items = [];
        snap.forEach((child) => {
          items.push({
            name: child.val().name,
            style: child.val().style,
            description: child.val().description,
            image: child.val().image,
            _key: child.key
          });
        });
  
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });
  
      });
    }
  
    componentDidMount() {
      this.listenForItems(this.itemsRef);
    }

    _renderItem(item) {
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;

      return (
        <ListItem item={item}  onPress={() => navigate('SeePlace', {place_key: item._key})} />
      );
    }
  }

  module.exports = ListScreen;