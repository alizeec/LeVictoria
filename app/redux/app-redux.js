import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "../config/firebase"

//
// Initial State...
//
const initialState = {
    placeData: [],
}


//
// Reducer...
//
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "getPlaceData":
            return { ...state, placeData: action.value };
        case "addPlaceData":
            return {...state};
        default:
            return state;
    }
}

//
// Store...
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators
//
const getPlaceData = (placeData) => {
    return {
        type: "getPlaceData",
        value: placeData
    };
};

const watchPlaceData = () => {
    return function(dispatch) {
        firebase.database().ref().on("value", (snapshot) =>
        {
            var places = [];
            snapshot.forEach((place) => {
                places.push({
                    name: place.val().name,
                    description: place.val().description,
                    image: place.val().image,
                    style: place.val().style,
                    key: place.key
                });
            });

            var actionSetPlaceData = getPlaceData(places);
            dispatch(actionSetPlaceData);
        }, function(error) { console.log(error); });
    }
};

const addPlaceData = (placeData) => {
    return {
        type: "addPlaceData",
    };
};

const pushPlaceData = (placeData) => {
    return function(dispatch) {
        firebase.database().ref().push().set(placeData, (error) => {
            if (error) {
                console.log(error);
            } else {
                dispatch(addPlaceData());
            }
        });
    }
};
export { getPlaceData, watchPlaceData, pushPlaceData, addPlaceData };
