import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button, Alert } from 'react-native';
const Title = require('../Title');
import t from 'tcomb-form-native'; // 0.6.9
const styles = require('../../../styles.js');
import Place from '../../models/Place'
import firebase from "../../config/firebase"
const ListScreen = require('../List/List')

const Form = t.form.Form;

const options = {
    fields: {
      name: {
        label: 'Nom du restaurant',
      },
      price_range: {
        label: 'Fourchette de prix',
        help: 'from 1 to 4. Ex:2 for €€'
      },
      description: {
        label: 'Description'
      },
      subway: {
        label: 'Métro le plus proche'
      },
      style: {
        label: 'Style',
        placeholder: 'Tapas',
        help: 'Quel style de bar ou cuisine?'
      },
      address: {
        label: 'L\'adresse'
      }
    },
  };

class AddPlaceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.itemsRef = this.getRef().child('items');
      }

      getRef() {
        return firebase.database().ref();
      }

    render() {
        const { params } = this.props.navigation.state;
        const type = params ? params.type : null;
        console.log(type);
        return (
          <ScrollView style={styles.container}>
            <Title title={type} />
            <Form  ref="form" type={Place} options={options}/>
            <Button title="Ajouter" onPress={this.handleSubmit} />
          </ScrollView>
        );
      }

      handleSubmit = () => {
        const value = this.refs.form.getValue(); // use that ref to get the form value
        const { navigate } = this.props.navigation;
        this.itemsRef.push({
          name: value.name,
          description: value.description,
          price_range: value.price_range,
          subway: value.subway,
          style: value.style,
          address: value.address
         })
        console.log('value: ', value);
        navigate('List', {type: type})
      }
}
module.exports = AddPlaceScreen;