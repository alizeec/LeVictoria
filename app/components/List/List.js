import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {watchPlaceData} from '../../redux/app-redux';
const ListItem = require('../ListItem');
import PlacePicker from '../PlacePicker';

const styles = require('./styleList.js')


class ListScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: "",
    });

    constructor(props) {
        super(props);
        this.state = {
            data: [this.props.placeData],
        };
        this.itemsRef = this.props
    }

    componentDidMount() {
        this.props.watchPlaceData();
    }

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        const type = params ? params.type : null;
        const places = this.props.placeData;

        return (
            <View style={styles.container_list}>
                <FlatList
                    data={this.props.placeData}
                    renderItem={({item}) => this._renderItem(item)}
                />
                <PlacePicker />
                {/**<ActionButton onPress={() => navigate('AddPlace', {type: type})} title="Add"/>**/}
            </View>
        );
    }

    _renderItem(item) {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;

        return (
            <ListItem item={item} onPress={() => navigate('SeePlace', {place_key: item.key})}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        placeData: state.placeData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        watchPlaceData: () => dispatch(watchPlaceData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
