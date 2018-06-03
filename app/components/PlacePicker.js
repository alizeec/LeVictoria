import React from 'react';
import {View, Text} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import Touchable from 'react-native-platform-touchable';
import {connect} from "react-redux";
import {pushPlaceData} from '../redux/app-redux';
import ActionButton from '../components/ActionButton';


class PlacePicker extends React.Component {
    static navigationOptions = {
        header: null
    };

    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
            .then((result) => {
                console.log(result);
                const place = {
                    address: result.address,
                    latitude: result.latitude,
                    longitude: result.longitude,
                    name: result.name,
                    phoneNumber: result.phoneNumber,
                    priceLevel: result.priceLevel,
                    website: result.website
                };
                console.log(place);
                this.props.pushPlaceData(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    render() {
        return (
            <View>
                <Touchable
                    onPress={() => this.openSearchModal()}
                >
                    <ActionButton title={"Add a place"}/>
                </Touchable>
            </View>
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
        pushPlaceData: (placeData) => dispatch(pushPlaceData(placeData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacePicker);