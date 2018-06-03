import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './app/redux/app-redux';
import AppNavigator from './app/navigation/navigator';

export default class LeVictoria extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('Vicoune', () => LeVictoria);
console.ignoredYellowBox = ['Setting a timer', '`setTranslucent` is only available on Android',
    'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
    'Remote debugger is in a background tab which may cause apps to perform slowly'];

