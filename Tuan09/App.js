import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from './components/GetStarted';
import ListBikes from './components/ListBikes.js';
import BikeDetail from './components/BikeDetail.js';
import Item from './components/Item.js';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
export default function index() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="GetStarted"
          screenOptions={{
            tabBarStyle: { display: 'none' }, // Ẩn tab bar
            headerShown: false, // Ẩn header
          }}>
          <Tab.Screen name="GetStarted" component={GetStarted} />
          <Tab.Screen name="ListBikes" component={ListBikes} />
          <Tab.Screen name="BikeDetail" component={BikeDetail} />
          <Tab.Screen name="Item" component={Item} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
