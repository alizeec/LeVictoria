import React from 'react';

import { ScrollView, Text, Image, View } from 'react-native';
const Title = require('../Title');
import firebase from "../../config/firebase"
const styles = require('./stylePlace.js');


class SeePlaceScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:  "",
      });

    constructor(props) {
        super(props);
        this.itemsRef = this.getRef().child('items');
      }

      getRef() {
        return firebase.database().ref();
      }

    render(){
        const { params } = this.props.navigation.state;
        const place_key = params ? params.place_key : null;

        var place;
        this.getRef().child("items").child(place_key).on('value', (snap) => place = snap.val());
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image style={styles.image}
                        source={{uri: place.image}}
                    />
                    <View style={styles.top_info_wrapper}>
                        <View style={styles.main_info_wrapper}>  
                            <Text style={styles.main_info_text}>{place.name}</Text>
                            <Text>{place.style}</Text> 
                            <Text>{place.price_range}</Text>
                        </View> 
                        <View style={styles.subway_wrapper}> 
                            <Text>{place.subway}</Text> 
                        </View>
                    </View>
                    <Text style={styles.description}>{place.description}</Text> 
                    <Text>{place.address}</Text> 
                </ScrollView>
            </View>
        );
    }
}
module.exports = SeePlaceScreen;