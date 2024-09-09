import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={() => ({
            headerStyle: {
                height: 85,
            },
            tabBarLabel: () => null,
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.black,
        })}
    >
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
    </Tab.Navigator>
);

export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Page1" component={Page1} />
                <Stack.Screen name="Home" component={TabNavigator}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
