'use strict';

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, ListView, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
const styles = require('./styles.js');
import LeVictoriaApp from "./app/navigation/navigator"

export default class App extends React.Component {
  render() {
    return <LeVictoriaApp />;
  }
}
console.ignoredYellowBox = ['Setting a timer'];
AppRegistry.registerComponent('Vicoune', () => LeVictoriaApp);
