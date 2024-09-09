import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
                let iconName;

                switch (route.name) {
                    case 'Page1':
                        iconName = 'user-o';
                        break;
                    case 'Page2':
                        iconName = 'heart-o';
                        break;
                    case 'Page3':
                        iconName = 'bookmark-o';
                        break;
                    default:
                        iconName = 'send-o';
                        break;
                }

                return <Icon name={iconName} size={25} color={color} />;
            },

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
