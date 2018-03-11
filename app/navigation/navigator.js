const ListScreen = require('../components/List/List');
const AddPlaceScreen = require('../components/AddPlace/AddPlace')
const HomeScreen = require('../components/Home/Home')
const SeePlaceScreen = require('../components/SeePlace/SeePlace')
import { StackNavigator } from 'react-navigation';

const LeVictoriaApp = StackNavigator({
    Home: { screen: HomeScreen },
    List: { screen: ListScreen },
    AddPlace: {screen: AddPlaceScreen},
    SeePlace: {screen: SeePlaceScreen}
  },{ 
    headerMode: 'screen' 
  });

export default LeVictoriaApp