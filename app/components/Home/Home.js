import React, { Component } from 'react';
import { Text, View, Button, Image, StatusBar, StyleSheet, TouchableOpacity,TouchableNativeFeedback,  ScrollView } from 'react-native';
const styles = require('./styleHome')
import Touchable from 'react-native-platform-touchable';
import navigator from '../../navigation/navigator'

export class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        StatusBar.setTranslucent(true);
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container_home}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container_logo}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/logo.png')}
                        />
                    </View>
                    <Text style={styles.title}>Le Victoria</Text>

                    {/** Lunch */}
                    <Touchable onPress={() => navigate('List', {type: "Lunch"})}>
                        <View style={styles.category}>
                            <Image style={styles.category_image}
                                   source={require('../../assets/lunch.jpg')}
                            />
                            <View style={[styles.category_color, styles.category_color_lunch]} />
                            <View style={styles.category_text_wrapper}>
                                <Text style={styles.category_text_title}>J'ai faim</Text>
                                <View style={styles.white_divider}/>
                                <Text style={styles.category_text_subtitle}>et c'est le midi</Text>
                            </View>
                        </View>
                    </Touchable>

                    {/** Dinner */}
                    <Touchable  onPress={() => navigate('List', {type: "Dinner"})}>
                        <View style={styles.category}>
                            <Image style={styles.category_image}
                                   source={require('../../assets/dinner.jpg')}
                            />
                            <View style={[styles.category_color, styles.category_color_dinner]} />
                            <View style={styles.category_text_wrapper}>
                                <Text style={styles.category_text_title}>J'ai faim</Text>
                                <View style={styles.white_divider}/>
                                <Text style={styles.category_text_subtitle}>et c'est le soir</Text>
                            </View>
                        </View>
                    </Touchable>

                    {/** Drink */}
                    <Touchable  onPress={() => navigate('List', {type: "Drink"})}>
                        <View style={styles.category}>
                            <Image style={styles.category_image}
                                   source={require('../../assets/drink.jpeg')}
                            />
                            <View style={[styles.category_color, styles.category_color_drink]} />
                            <View style={styles.category_text_wrapper}>
                                <Text style={styles.category_text_title}>J'ai soif</Text>
                                <View style={styles.white_divider}/>
                                <Text style={styles.category_text_subtitle}>et peu importe l'heure</Text>
                            </View>
                        </View>
                    </Touchable>

                    {/** Brunch */}
                    <Touchable  onPress={() => navigate('List', {type: "Brunch"})}>
                        <View style={styles.category}>
                            <Image style={styles.category_image}
                                   source={require('../../assets/brunch.jpg')}
                            />
                            <View style={[styles.category_color, styles.category_color_brunch]} />
                            <View style={styles.category_text_wrapper}>
                                <Text style={styles.category_text_title}>Je veux bruncher</Text>
                                <View style={styles.white_divider}/>
                                <Text style={styles.category_text_subtitle}>tel un hipster</Text>
                            </View>
                        </View>
                    </Touchable>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;
