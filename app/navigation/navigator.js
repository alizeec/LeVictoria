import React from 'react';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/Home/Home';
import ListScreen from '../components/List/List';

export default AppNavigator = createStackNavigator({
    Home: HomeScreen,
    List: ListScreen
    //Home: { screen: HomeScreen },
    /* AddPlace: {screen: AddPlaceScreen},
     SeePlace: {screen: SeePlaceScreen}*/
}, {
    headerMode: 'screen',
    initialRouteName: 'Home'
});